import React from "react";
import { render, screen } from "@testing-library/react";
import FormCard from "../user/components/FormCard"; // Ganti path dengan lokasi file FormCard

describe("FormCard Component", () => {
  test("renders title correctly", () => {
    const title = "Form Title";
    render(<FormCard title={title}>Test Children</FormCard>);

    // Memastikan judul dirender dengan benar
    const heading = screen.getByRole("heading", { name: title });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-[#12496E]");
  });

  test("renders children correctly", () => {
    const childrenContent = "This is a child component";
    render(<FormCard title="Test Title">{childrenContent}</FormCard>);

    // Memastikan konten anak dirender dengan benar
    const children = screen.getByText(childrenContent);
    expect(children).toBeInTheDocument();
  });

  test("applies correct layout styling", () => {
    const title = "Styled Test";
    render(<FormCard title={title}>Styled Children</FormCard>);

    // Memastikan struktur layout utama
    const container = screen.getByText(title).closest("div");
    expect(container).toHaveClass("bg-white rounded-xl p-4 md:p-8 shadow-lg");
  });
});
