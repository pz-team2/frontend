import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../user/components/Search"; 
import React from 'react';

describe("Search component", () => {
  let mockOnSearch: jest.Mock;

  beforeEach(() => {
    // Initialize the mock function
    mockOnSearch = jest.fn();
  });

  it("calls onSearch with the correct query and category when input changes", () => {
    const categories = [
      { _id: "1", name: "Category 1" },
      { _id: "2", name: "Category 2" },
    ];

    render(<Search onSearch={mockOnSearch} categories={categories} />);

    // Type a query in the search input
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Test Query" },
    });

    // Select a category from the dropdown
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Category 1" },
    });

    // Check if the onSearch function is called with the correct parameters
    expect(mockOnSearch).toHaveBeenCalledWith("Test Query", "Category 1");
  });

  it("calls onSearch with the correct query and category when search button is clicked", () => {
    const categories = [
      { _id: "1", name: "Category 1" },
      { _id: "2", name: "Category 2" },
    ];

    render(<Search onSearch={mockOnSearch} categories={categories} />);

    // Type a query in the search input
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Test Query" },
    });

    // Select a category from the dropdown
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Category 2" },
    });

    // Click the search button
    fireEvent.click(screen.getByText("Search"));

    // Check if the onSearch function is called with the correct parameters
    expect(mockOnSearch).toHaveBeenCalledWith("Test Query", "Category 2");
  });

  it("calls onSearch with an empty category when no category is selected", () => {
    const categories = [
      { _id: "1", name: "Category 1" },
      { _id: "2", name: "Category 2" },
    ];

    render(<Search onSearch={mockOnSearch} categories={categories} />);

    // Type a query in the search input
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Test Query" },
    });

    // Do not select any category (leave the default "Category" selected)
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "" },
    });

    // Click the search button
    fireEvent.click(screen.getByText("Search"));

    // Check if the onSearch function is called with the correct parameters
    expect(mockOnSearch).toHaveBeenCalledWith("Test Query", "");
  });

  it("displays the category options correctly", () => {
    const categories = [
      { _id: "1", name: "Category 1" },
      { _id: "2", name: "Category 2" },
    ];

    render(<Search onSearch={mockOnSearch} categories={categories} />);

    // Check if the category options are rendered
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
  });
});
