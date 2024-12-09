// Table.test.tsx
import { render, screen } from "@testing-library/react";
import { Table } from "../components/Layout/Table";
import React from "react";

describe("Table Component", () => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  const data = [
    { name: "John Doe", age: 28 },
    { name: "Jane Doe", age: 24 },
  ];

  test("renders table with headers", () => {
    render(<Table columns={columns} data={data} />);

    // Verifikasi header tabel
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Age/i)).toBeInTheDocument();
  });

  test("renders rows of data correctly", () => {
    render(<Table columns={columns} data={data} />);

    // Verifikasi data baris pertama
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/28/i)).toBeInTheDocument();

    // Verifikasi data baris kedua
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/24/i)).toBeInTheDocument();
  });

  test("renders correct number of columns and rows", () => {
    render(<Table columns={columns} data={data} />);

    // Verifikasi jumlah kolom
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(columns.length);

    // Verifikasi jumlah baris (termasuk header)
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(data.length + 1); // 1 untuk header
  });
});
