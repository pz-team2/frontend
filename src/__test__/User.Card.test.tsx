import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../user/components/Card";  
import { BrowserRouter as Router } from "react-router-dom";  

// Membuat mock data untuk Card
const mockCard = {
  _id: "1",
  title: "Event Title",
  date: new Date("2024-12-25"),
  address: "Jl. Contoh Alamat No. 1",
  price: 100000,
  quota: 10,
  category: "Kategori A",
  picture: "https://via.placeholder.com/150",
};

describe("Card Component", () => {
  test("renders card with correct data", () => {
    render(
      <Router>
        <Card {...mockCard} />
      </Router>
    );

    // Cek jika elemen yang diharapkan muncul di UI
    expect(screen.getByText(mockCard.title)).toBeInTheDocument();
    expect(screen.getByText(mockCard.date.toLocaleDateString("id-ID"))).toBeInTheDocument();
    expect(screen.getByText(mockCard.address)).toBeInTheDocument();
    expect(screen.getByText(`Rp. ${mockCard.price.toLocaleString("id-ID")}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockCard.quota} Tiket Tersedia`)).toBeInTheDocument();
    expect(screen.getByAltText(mockCard.title)).toHaveAttribute("src", mockCard.picture);
  });

  test("renders 'Beli Tiket' button when quota is available", () => {
    render(
      <Router>
        <Card {...mockCard} />
      </Router>
    );

    // Cek apakah tombol "Beli Tiket" muncul ketika quota lebih dari 0
    expect(screen.getByText("Beli Tiket")).toBeInTheDocument();
  });

  test("renders 'Tiket Sudah Habis' button when quota is 0", () => {
    const mockCardNoQuota = { ...mockCard, quota: 0 };
    
    render(
      <Router>
        <Card {...mockCardNoQuota} />
      </Router>
    );

    // Cek apakah tombol "Tiket Sudah Habis" muncul ketika quota 0
    expect(screen.getByText("Tiket Sudah Habis")).toBeInTheDocument();
  });

  test("button should link to the correct URL", () => {
    render(
      <Router>
        <Card {...mockCard} />
      </Router>
    );

    // Cek apakah tombol Beli Tiket mengarahkan ke URL yang benar
    const button = screen.getByText("Beli Tiket");
    fireEvent.click(button);
    expect(window.location.pathname).toBe(`/detail/${mockCard._id}`);
  });
});
