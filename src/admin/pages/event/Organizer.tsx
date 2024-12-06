import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { TbPencilCog } from "react-icons/tb";
import { TambahOrganizer } from "./TambahOrganizer";
import { getOrganizersApi, deleteOrganizerApi, IOrganizer } from "../../../Redux/features/organizer/organizerApi";
import Swal from "sweetalert2";
import UpdateOrganizer from "./UpdateOrganizer";
import DataTable from "react-data-table-component";


export const Organizer = () => {
  const [organizers, setOrganizers] = useState<IOrganizer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  const [selectedOrganizer, setSelectedOrganizer] = useState<IOrganizer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch data organizers
  const fetchOrganizers = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getOrganizersApi();
      if (data.code === 200) {
        setOrganizers(data.data || []);
      } else {
        setError("Terjadi kesalahan saat mengambil data.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganizers();
  }, []);

  // Delete organizer
  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak dapat mengembalikan data yang dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, hapus!",
    });

    if (result.isConfirmed) {
      const deleteResult = await deleteOrganizerApi(id);
      if (deleteResult.success) {
        setOrganizers(organizers.filter((organizer) => organizer._id !== id));
        Swal.fire("Terhapus!", "Organizer telah dihapus.", "success");
      } else {
        setError(deleteResult.message || "Gagal menghapus organizer");
        Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus organizer.", "error");
      }
    }
  };

  // Edit organizer
  const handleEdit = (organizer: IOrganizer) => {
    setSelectedOrganizer(organizer);
    setIsModalOpen(true);
  };

  // Update success handler
  const handleUpdateSuccess = (updatedOrganizer: IOrganizer) => {
    setOrganizers((prev) =>
      prev.map((org) => (org._id === updatedOrganizer._id ? updatedOrganizer : org))
    );
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Data Organizer berhasil diperbarui",
    });
    setIsModalOpen(false);
    setSelectedOrganizer(null);
  };

  // Columns for the table
  const columns = [
    {
      name: "No",
      selector: (row: any) => row.no,
      sortable: true,
    },
    {
      name: "Nama Organizer",
      selector: (row: any) => row.organizerName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.status,
      sortable: true,
    },
    {
      name: "Aksi",
      selector: (row: any) => row.aksi,
    },
  ];

  // Map rows
  const rows = organizers.map((organizer, index) => ({
    no: index + 1,
    organizerName: organizer.organizerName,
    email: organizer.email,
    status: (
      <div
        className={`${organizer.status === "Aktif" ? "bg-secondary" : "bg-red-500"
          } text-white text-center rounded-xl bg-red-100 w-24`}
      >
        {organizer.status}
      </div>
    ),
    aksi: (
      <div className="flex flex-row gap-2">
        <Link
          className="btn bg-primary border-0 text-white shadow-md hover:bg-blue-950"
          to={`/admin/organizer/detail/${organizer._id}`}
        >
          <GoNote size={20} />
        </Link>
        <button
          className="btn bg-secondary border-0 text-white shadow-md hover:bg-cyan-700"
          onClick={() => handleEdit(organizer)}
        >
          <TbPencilCog size={20} />
        </button>
        <button
          className="btn bg-red-400 border-0 text-white shadow-md hover:bg-red-500"
          onClick={() => handleDelete(organizer._id)}
        >
          <RiDeleteBin5Line size={20} />
        </button>
      </div>
    ),
  }));

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

      <h1 className="mb-5 text-2xl font-extrabold text-black text-shadow">Organizer</h1>
      <div className="flex justify-end mb-4">
        <TambahOrganizer onAdd={fetchOrganizers} />
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="card shadow-md border border-gray-200 flex-grow p-8">
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
          // fixedHeader
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Cari..."
              className="p-2 border border-gray-300 rounded-full w-full max-w-xs bg-white mb-3"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          }
        />
      </div>
      {isModalOpen && selectedOrganizer && (
        <UpdateOrganizer
          organizerId={selectedOrganizer._id}
          onClose={() => setIsModalOpen(false)}
          onUpdateSuccess={handleUpdateSuccess}
        />
      )}
    </div>
  );
};
