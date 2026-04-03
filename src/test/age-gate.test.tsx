import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AgeGate from "@/components/AgeGate";

// Reset localStorage and navigator mock before each test
beforeEach(() => {
  localStorage.clear();
  Object.defineProperty(navigator, "userAgent", {
    value: "Mozilla/5.0 (Test Browser)",
    writable: true,
    configurable: true,
  });
});

describe("AgeGate", () => {
  it("renders the age gate form for an unverified visitor", () => {
    render(<AgeGate><div data-testid="content">Protected Content</div></AgeGate>);
    expect(screen.getByText("Age Verification")).toBeTruthy();
    expect(screen.queryByTestId("content")).toBeNull();
  });

  it("shows protected content when localStorage has a valid verification", () => {
    localStorage.setItem("docs_hemp_age_verified", Date.now().toString());
    render(<AgeGate><div data-testid="content">Protected Content</div></AgeGate>);
    expect(screen.getByTestId("content")).toBeTruthy();
  });

  it("shows content when localStorage verification is expired", () => {
    const twentyFiveHoursAgo = Date.now() - 25 * 60 * 60 * 1000;
    localStorage.setItem("docs_hemp_age_verified", twentyFiveHoursAgo.toString());
    render(<AgeGate><div data-testid="content">Protected Content</div></AgeGate>);
    // Expired — gate should show
    expect(screen.getByText("Age Verification")).toBeTruthy();
  });

  it("blocks a visitor who enters a DOB under 21", () => {
    render(<AgeGate><div data-testid="content">Protected Content</div></AgeGate>);

    const currentYear = new Date().getFullYear();
    fireEvent.change(screen.getByPlaceholderText("MM"), { target: { value: "01" } });
    fireEvent.change(screen.getByPlaceholderText("DD"), { target: { value: "01" } });
    fireEvent.change(screen.getByPlaceholderText("YYYY"), { target: { value: String(currentYear - 18) } });
    fireEvent.click(screen.getByText("Enter Site"));

    expect(screen.getByText("You must be 21 or older to access this site.")).toBeTruthy();
    expect(screen.queryByTestId("content")).toBeNull();
  });

  it("admits a visitor who enters a DOB making them 21+", () => {
    render(<AgeGate><div data-testid="content">Protected Content</div></AgeGate>);

    const currentYear = new Date().getFullYear();
    fireEvent.change(screen.getByPlaceholderText("MM"), { target: { value: "01" } });
    fireEvent.change(screen.getByPlaceholderText("DD"), { target: { value: "01" } });
    fireEvent.change(screen.getByPlaceholderText("YYYY"), { target: { value: String(currentYear - 25) } });
    fireEvent.click(screen.getByText("Enter Site"));

    expect(screen.getByTestId("content")).toBeTruthy();
  });

  it("writes verification timestamp to localStorage on successful entry", () => {
    render(<AgeGate><div data-testid="content">Protected Content</div></AgeGate>);

    const currentYear = new Date().getFullYear();
    fireEvent.change(screen.getByPlaceholderText("MM"), { target: { value: "06" } });
    fireEvent.change(screen.getByPlaceholderText("DD"), { target: { value: "15" } });
    fireEvent.change(screen.getByPlaceholderText("YYYY"), { target: { value: String(currentYear - 30) } });
    fireEvent.click(screen.getByText("Enter Site"));

    const stored = localStorage.getItem("docs_hemp_age_verified");
    expect(stored).not.toBeNull();
    expect(parseInt(stored!, 10)).toBeGreaterThan(0);
  });

  it("bypasses gate for known crawler user-agents", () => {
    Object.defineProperty(navigator, "userAgent", {
      value: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      writable: true,
      configurable: true,
    });
    render(<AgeGate><div data-testid="content">Protected Content</div></AgeGate>);
    expect(screen.getByTestId("content")).toBeTruthy();
  });
});
