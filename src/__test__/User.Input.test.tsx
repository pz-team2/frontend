import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../user/components/Input";
describe("Input Component", () => {
  it("renders input with label", () => {
    render(<Input label="Test Label" id="test-input" />);
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
  });

  it("renders input with placeholder", () => {
    render(<Input placeholder="Enter your text" id="test-input" />);
    expect(screen.getByPlaceholderText("Enter your text")).toBeInTheDocument();
  });

  it("shows error message when error is provided", () => {
    const errorMessage = "This field is required";
    render(<Input error={errorMessage} id="test-input" />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const customClass = "custom-class";
    render(<Input className={customClass} id="test-input" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass(customClass);
  });

  it("calls onChange handler when typing", async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} id="test-input" />);
    const inputElement = screen.getByRole("textbox");

    await userEvent.type(inputElement, "Hello");
    expect(handleChange).toHaveBeenCalledTimes(5); 
  });
});
