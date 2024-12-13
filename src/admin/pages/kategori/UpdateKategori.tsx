import React, { useState } from "react";
import { useAppDispatch } from "../../../Redux/hook";
import { updatecategory } from "../../../Redux/features/category/categorySlice";
import { Input } from "../../../components/Fragments/Input";
import Swal from "sweetalert2";

interface UpdateKategoriModalProps {
  id: string;
  currentName: string;
  currentDescription: string;
  onClose: () => void;
}

export const UpdateKategori: React.FC<UpdateKategoriModalProps> = ({
  id,
  currentName,
  currentDescription,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(currentName);
  const [description, setDescription] = useState(currentDescription);

  const handleSubmit = () => {
    Swal.fire({
      title: "Apakah Anda yakin ingin mengupdate kategori ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Update",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updatecategory({ id, data: { name, description } }));
        Swal.fire("Updated!", "Kategori telah berhasil diperbarui.", "success");
        onClose();
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-slate-100 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-1/3">
        <h2 className="text-lg font-bold mb-4 text-center text-black">Update Kategori</h2>
        <div className="mb-4 text-black">
          <Input label={"Name"} type={"text"}  name={"name"} title={"Masukan Name"} variant={'bg-slate-100 mb-4'} value={name} onChange={(e) => setName(e.target.value)}/>
          <Input label={"Deskripsi"} type={"text"}  name={"name"} title={"Masukan Name"} variant={'bg-slate-100'} value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="btn bg-primary border-0 text-white hover:bg-sky-950"
            onClick={onClose}
          >
            Batal
          </button>
          <button
            className="btn bg-secondary border-0 text-white hover:bg-cyan-700"
            onClick={handleSubmit}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
