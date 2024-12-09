import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonProfile from "../user/components/ButtonProfile";

describe("ButtonProfile Component", () => {
  it("renders the button with children correctly", () => {
    render(<ButtonProfile>Test Button</ButtonProfile>);
    const buttonElement = screen.getByRole("button", { name: /test button/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Test Button");
  });

  it("applies primary variant styles by default", () => {
    render(<ButtonProfile>Primary Button</ButtonProfile>);
    const buttonElement = screen.getByRole("button", { name: /primary button/i });
    expect(buttonElement).toHaveClass("bg-[#12496E]");
  });

  it("applies secondary variant styles when specified", () => {
    render(<ButtonProfile variant="secondary">Secondary Button</ButtonProfile>);
    const buttonElement = screen.getByRole("button", { name: /secondary button/i });
    expect(buttonElement).toHaveClass("bg-gray-200");
  });

  it("disables the button and shows loading spinner when isLoading is true", () => {
    render(
      <ButtonProfile isLoading>Loading Button</ButtonProfile>
    );
    const buttonElement = screen.getByRole("button", { name: /loading button/i });
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass("text-transparent");

    const loaderElement = screen.getByRole("img", { hidden: true }); // Check loader with role
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveAttribute("aria-label", "Loading");
  });

  it("renders with full width when fullWidth prop is true", () => {
    render(
      <ButtonProfile fullWidth>Full Width Button</ButtonProfile>
    );
    const buttonElement = screen.getByRole("button", { name: /full width button/i });
    expect(buttonElement).toHaveClass("w-full");
  });
});
