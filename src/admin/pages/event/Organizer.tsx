import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { TbPencilCog } from "react-icons/tb";
import { TambahOrganizer } from "./TambahOrganizer";
import { Table } from "../../../components/Layout/Table";
import { getOrganizersApi, deleteOrganizerApi, IOrganizer } from "../../../Redux/features/organizer/organizerApi";
import Swal from "sweetalert2";
import UpdateOrganizer from "./UpdateOrganizer";

export const Organizer = () => {
  const [organizers, setOrganizers] = useState<IOrganizer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [selectedOrganizer, setSelectedOrganizer] = useState<IOrganizer | null>(null); // Untuk menyimpan organizer yang akan diedit
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const handleEdit = (organizer: IOrganizer) => {
    setSelectedOrganizer(organizer); // Menyimpan organizer yang akan diedit
    setIsModalOpen(true); // Membuka modal
  };

  const handleUpdateSuccess = (updatedOrganizer: IOrganizer) => {
    setOrganizers((prev) =>
      prev.map((org) => (org._id === updatedOrganizer._id ? updatedOrganizer : org))
    );
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Berhasil Update Data Organizer",
    });
    setIsModalOpen(false);
    setSelectedOrganizer(null);
    return;
  };

  const columns = [
    { key: "no", label: "No" },
    { key: "organizerName", label: "Nama Organizer" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
    { key: "aksi", label: "Aksi" },
  ];

  const data = organizers.map((organizer, index) => ({
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
          onClick={() => handleEdit(organizer)} // Membuka modal edit
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

  return (
    <div className="p-6">
      <h1 className="mb-5 text-2xl font-extrabold text-black text-shadow">Organizer</h1>
      <div className="flex justify-end mb-4">
        <TambahOrganizer onAdd={fetchOrganizers} />
      </div>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      <div className="card shadow-md border border-gray-200 flex-grow">
        <Table columns={columns} data={data} />
      </div>
      {isModalOpen && selectedOrganizer && (
        <UpdateOrganizer
          organizerId={selectedOrganizer._id} // Mengirimkan hanya ID
          onClose={() => setIsModalOpen(false)}
          onUpdateSuccess={handleUpdateSuccess}
        />
      )}
    </div>
  );
};
