import React from 'react'
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { dataterbaru } from "../../../Redux/features/dashboard/dashboardSlice";
import DataTable from "react-data-table-component";

export const EventData = () => {
  const dispatch = useAppDispatch();
  const { isSucces, events } = useAppSelector((state) => state.dashboard);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    dispatch(dataterbaru());
  }, [dispatch]);

  const columns = [
    { name: "Gambar", selector: (row: any) => row.gambar, sortable: false },
    { name: "Organizer", selector: (row: any) => row.organizer, sortable: true },
    { name: "Event", selector: (row: any) => row.event, sortable: true },
    { name: "Tiket", selector: (row: any) => row.tiket, sortable: true },
    { name: "Tanggal", selector: (row: any) => row.tanggal, sortable: true },
    { name: "Status", selector: (row: any) => row.status, sortable: false },
  ];

  const rows = isSucces
    ? events.map((event) => ({
        gambar: (
          <img
            src={`http://localhost:3500/${event.picture}`}
            alt="Event"
            className="w-20 h-14 rounded-xl"
          />
        ),
        organizer: event.organizerName,
        event: event.title,
        tiket: `${event.ticketsSold} Tiket`,
        tanggal: event.date,
        status: (
          <div
            className={`${
              event.status === "Aktif" ? "bg-green-300" : "bg-red-300"
            } text-center rounded-2xl p-1 text-white`}
          >
            {event.status}
          </div>
        ),
      }))
    : [];

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const customStyles = {
    rows: {
      style: {
        fontSize: "14px",
        padding: "10px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#f4f4f4",
        fontWeight: "bold",
        color: "#333",
        fontSize: "16px",
      },
    },
    pagination: {
      style: {
        color: "#000",
        fontSize: "14px",
      },
    },
  };

  return (
    <div className="p-6">
      <h1 className="mb-5 text-2xl font-extrabold text-black text-shadow">Events</h1>
      <div className="card shadow-md border border-gray-200 flex-grow p-6">
        <DataTable
          columns={columns}
          data={filteredRows}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          highlightOnHover
          responsive
          customStyles={customStyles}
          className="shadow-sm rounded-lg overflow-hidden"
          fixedHeader
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Cari..."
              className="p-2 border border-gray-500 rounded-full w-full max-w-xs bg-white mb-3"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          }
        />
      </div>
    </div>
  );
};
