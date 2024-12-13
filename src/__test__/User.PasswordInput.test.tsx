import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PasswordInput from "../user/components/PasswordInput";

describe("PasswordInput Component", () => {
  const defaultProps = {
    label: "Password",
    value: "",
    onChange: jest.fn(),
  };

  it("renders label correctly", () => {
    render(<PasswordInput {...defaultProps} />);
    expect(screen.getByText("Password")).toBeInTheDocument();
  });

  it("initially renders as password type", () => {
    const { container } = render(<PasswordInput {...defaultProps} />);
    const input = container.querySelector("input[type='password']");
    expect(input).toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    const { container } = render(<PasswordInput {...defaultProps} />);
    const toggleButton = screen.getByRole("button", { name: /show password/i });
    const input = container.querySelector("input");

    // Initially password type
    expect(input).toHaveAttribute("type", "password");

    // Toggle to text type
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");

    // Toggle back to password type
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });

  it("validates minimum password length", () => {
    const props = {
      ...defaultProps,
      value: "short",
      minLength: 8,
    };

    render(<PasswordInput {...props} />);

    expect(
      screen.getByText(
        `Password must be at least ${props.minLength} characters long`
      )
    ).toBeInTheDocument();
  });

  it("displays custom error", () => {
    const props = {
      ...defaultProps,
      error: "Custom error message",
    };

    render(<PasswordInput {...props} />);

    expect(screen.getByText("Custom error message")).toBeInTheDocument();
  });
});
