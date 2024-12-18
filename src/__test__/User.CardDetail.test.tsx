import React from "react";
import { render, screen } from "@testing-library/react";
import CardDetail from "../user/components/CardDetail";

describe("CardDetail Component", () => {
  const mockProps = {
    title: "Test Event",
    description: "This is a <strong>test</strong> description",
    address: "Test Location",
    date: new Date("2024-01-15"),
    startTime: "10:00",
    finishTime: "12:00",
    quota: 50,
  };

  it("renders all props correctly", () => {
    render(<CardDetail {...mockProps} />);

    expect(screen.getByText("Test Event")).toBeInTheDocument();
    const descriptionElement = screen.getByText((content) =>
      content.includes("test")
    );
    expect(descriptionElement).toBeInTheDocument();

    // Mencocokkan tanggal dengan regex untuk memungkinkan format tanggal terpisah oleh elemen lain
    const dateElement = screen.getByText(/Tanggal :\s*15\/1\/2024/);
    expect(dateElement).toBeInTheDocument();

    expect(screen.getByText(/Waktu : 10:00 - 12:00/)).toBeInTheDocument();
    expect(screen.getByText(/Lokasi : Test Location/)).toBeInTheDocument();
    expect(screen.getByText(/50 Tiket Tersedia/)).toBeInTheDocument();
  });

  it("handles string date input", () => {
    const stringDateProps = { ...mockProps, date: "2024-01-15" };

    render(<CardDetail {...stringDateProps} />);
    // Mencocokkan tanggal dengan regex untuk memungkinkan format tanggal terpisah oleh elemen lain
    const dateElement = screen.getByText(/Tanggal :\s*15\/1\/2024/);
    expect(dateElement).toBeInTheDocument();
  });

  it("does not render time if not provided", () => {
    const propsWithoutTime = { ...mockProps, startTime: "", finishTime: "" };
    render(<CardDetail {...propsWithoutTime} />);

    const timeElement = screen.queryByText(/Waktu :/);
    expect(timeElement).not.toBeInTheDocument();
  });
});
