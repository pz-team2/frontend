import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../user/components/Footer";

// Mock the logo import
jest.mock("../assets/img/goevent-w.png", () => "mocked-logo.png");

describe("Footer Component", () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  };

  it("renders the logo", () => {
    renderComponent();

    const logoImage = screen.getByAltText("Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "mocked-logo.png");
  });

  it("has a link to the home page", () => {
    renderComponent();

    const logoLink = screen.getByRole("link", { name: /logo/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders with correct CSS classes", () => {
    renderComponent();

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveClass("footer");
    expect(footerElement).toHaveClass("footer-center");
    expect(footerElement).toHaveClass("bg-primary");
  });
});
