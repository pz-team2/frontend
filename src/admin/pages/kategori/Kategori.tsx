import React, { useEffect, useState } from 'react';
import { Table } from "../../../components/Table";
import { TambahKategori } from "./TambahKategori";
import { FaTrashCan } from "react-icons/fa6"; // Importing the edit icon
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { dataCategory, deletecategory } from '../../../Redux/features/category/categorySlice';
import { UpdateKategori } from './UpdateKategori';
import { PiNotePencilBold } from "react-icons/pi";
import Swal from 'sweetalert2';

interface FormattedCategory {
  no: number;
  id: string;
  name: string;
  keterangan: string;
  aksi: JSX.Element;
}

const columns = [
  { key: 'no', label: 'No' },
  { key: 'name', label: 'Judul' },
  { key: 'keterangan', label: 'Keterangan' },
  { key: 'aksi', label: 'Aksi' },
];

export const Kategori: React.FC = () => {
  const dispatch = useAppDispatch();
  const { datacategory } = useAppSelector((state) => state.category);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    name: "",
    description: "",
  });

  const handleUpdate = (id: string, name: string, description: string) => {
    setSelectedCategory({ id, name, description });
    setModalOpen(true);
  };

  useEffect(() => {
    dispatch(dataCategory());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Apakah Anda yakin ingin menghapus kategori ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletecategory(id));
        Swal.fire("Deleted!", "Kategori telah berhasil dihapus.", "success");
        dispatch(dataCategory());
      }
    });
  };

  const formattedCategories: FormattedCategory[] = datacategory.map((category, index) => ({
    no: index + 1,
    id: category._id,
    name: category.name,
    keterangan: category.description,
    aksi: (
      <div className="flex flex-row gap-2">
        {/* Delete Button */}
        <button
          onClick={() => handleDelete(category._id)}
          className="btn bg-red-400 text-white border-0 hover:bg-red-500"
          key={`delete-${category._id}`}
        >
          <FaTrashCan size={15}/>
        </button>

        {/* Update Button */}
        <button
          onClick={() => handleUpdate(category._id, category.name, category.description)}
          className="btn bg-secondary text-white border-0 hover:bg-cyan-600"
          key={`update-${category._id}`}
        >
          <PiNotePencilBold size={18}/>
        </button>
      </div>
    ),
  }));

  return (
    <div>
      <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black">Setting Kategori</h1>
      <div className="card shadow-lg p-5 border border-gray-200 flex justify-center">
        <TambahKategori />
        <div className="card border border-gray-200 mt-4 w-full">
          <Table columns={columns} data={formattedCategories} />
        </div>
      </div>
      {isModalOpen && (
        <UpdateKategori
          id={selectedCategory.id}
          currentName={selectedCategory.name}
          currentDescription={selectedCategory.description}
          onClose={() => setModalOpen(false)} 
        />
      )}
    </div>
  );
};
