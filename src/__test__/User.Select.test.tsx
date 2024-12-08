import { render, screen, fireEvent } from "@testing-library/react";
import Select from "../user/components/Select"; // Update path sesuai lokasi komponen Anda
import React from 'react';

describe("Select Component", () => {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ];

  it("renders select with options", () => {
    render(<Select label="Test Label" options={options} />);
    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();
    options.forEach((option) => {
      expect(screen.getByRole("option", { name: option.label })).toBeInTheDocument();
    });
  });

  it("shows placeholder when no value is selected", () => {
    render(<Select label="Test Label" options={options} placeholder="Select an option" />);
    expect(screen.getByRole("option", { name: "Select an option" })).toBeInTheDocument();
  });

  it("handles value change", () => {
    render(<Select label="Test Label" options={options} placeholder="Select an option" />);
    const selectElement = screen.getByRole("combobox") as HTMLSelectElement; // Type assertion to HTMLSelectElement
    fireEvent.change(selectElement, { target: { value: "1" } });
    expect(selectElement.value).toBe("1");
  });

  it("displays error message", () => {
    render(<Select label="Test Label" options={options} error="This field is required" />);
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });
});
