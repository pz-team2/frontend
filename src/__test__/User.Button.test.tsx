import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../user/components/Button";

describe("Button component", () => {
  test("renders correctly with default props", () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(
      "btn bg-primary text-white hover:bg-primary-600 w-auto"
    );
  });

  test("applies the correct variant class", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const buttonElement = screen.getByRole("button", { name: /secondary/i });

    expect(buttonElement).toHaveClass(
      "bg-secondary text-white hover:bg-secondary-600"
    );
  });

  test("applies the correct size class", () => {
    render(<Button size="lg">Large</Button>);
    const buttonElement = screen.getByRole("button", { name: /large/i });

    expect(buttonElement).toHaveClass("btn-lg");
  });

  test("renders with an icon", () => {
    const icon = <span data-testid="icon">*</span>;
    render(<Button icon={icon}>With Icon</Button>);
    const iconElement = screen.getByTestId("icon");

    expect(iconElement).toBeInTheDocument();
  });

  test("applies custom classes", () => {
    render(<Button customClass="custom-class">Custom</Button>);
    const buttonElement = screen.getByRole("button", { name: /custom/i });

    expect(buttonElement).toHaveClass("custom-class");
  });

  test("applies full width class when width is full", () => {
    render(<Button width="full">Full Width</Button>);
    const buttonElement = screen.getByRole("button", { name: /full width/i });

    expect(buttonElement).toHaveClass("w-full");
  });

  test("applies custom width when provided", () => {
    render(
      <Button width="custom" customWidth="w-1/2">
        Custom Width
      </Button>
    );
    const buttonElement = screen.getByRole("button", { name: /custom width/i });

    expect(buttonElement).toHaveClass("w-1/2");
  });

  test("triggers onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
