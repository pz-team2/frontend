import React, { useEffect } from 'react';
import { Table } from "../../../components/Layout/Table";
import { TambahKategori } from "./TambahKategori";
import { FaTrashCan } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { dataCategory, deletecategory } from '../../../Redux/features/category/categorySlice';

interface FormattedCategory {
  no: number;
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

  useEffect(() => {
    dispatch(dataCategory());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus kategori ini?')) {
      dispatch(deletecategory(id));
      window.location.reload();
    }
  };

  const formattedCategories: FormattedCategory[] = datacategory.map((category, index) => ({
    no: index + 1,
    name: category.name,
    keterangan: category.description,
    aksi: (
      <div className="flex flex-row gap-2">
        <button
          onClick={() => handleDelete(category._id)}
          className="btn bg-red-400 text-white border-0 hover:bg-red-500"
        >
          <FaTrashCan />
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
    </div>
  );
};
