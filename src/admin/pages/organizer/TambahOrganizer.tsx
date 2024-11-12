/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../Redux/store";
import {
  addOrganizer,
  selectOrganizerErrorAndLoading,
  selectOrganizerMessage,
  setMessage,
} from "../../../Redux/features/organizer/organizerSlice";
import { Organizer } from "../../../Redux/features/type";
import { Input } from "../../../components/Fragments/Input";
import { FaCirclePlus } from "react-icons/fa6";
import Swal from "sweetalert2";

interface TambahOrganizerProps {
  onAdd: () => void;
}

export const TambahOrganizer = ({ onAdd }: TambahOrganizerProps) => {
  const dispatch: AppDispatch = useDispatch();

  // Menggunakan selector untuk error dan loading
  const { error, loading } = useSelector(selectOrganizerErrorAndLoading);

  // Menggunakan selector untuk mendapatkan message
  const message = useSelector(selectOrganizerMessage);

  const [formData, setFormData] = useState<Omit<Organizer, "_id">>({
    username: "",
    email: "",
    organizerName: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phoneNumber" && !/^\d*$/.test(value)) return;

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch action untuk menambah organizer
    const resultAction = await dispatch(addOrganizer(formData));

    // Mengambil status dari hasil dispatch
    if (addOrganizer.fulfilled.match(resultAction)) {
      Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Organizer berhasil ditambahkan.",
      });
      onAdd(); // Memanggil fungsi onAdd untuk memperbarui data tabel
    } else {
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: error || "Terjadi kesalahan saat menambahkan organizer.",
      });
    }

    // Menutup modal setelah berhasil atau gagal
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) modal.close();

    setFormData({
      username: "",
      email: "",
      organizerName: "",
      phoneNumber: "",
      password: "",
    });

    dispatch(setMessage(""));
  };

  const handleCloseModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) modal.close();
    dispatch(setMessage(""));
  };

  const handleOpenModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isFormValid =
    Object.values(formData).every((field) => field.trim() !== "") &&
    isEmailValid;

  return (
    <div>
      <button
        className="btn mb-4 border-0 text-white bg-secondary hover:bg-cyan-900"
        onClick={handleOpenModal}
      >
        <FaCirclePlus /> Tambah Organizer
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-black text-center">
            Tambah Data
          </h3>
          {message && (
            <p className="text-green-500 text-center mb-4">{message}</p>
          )}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="card text-black">
            <Input
              label="Username"
              type="text"
              title="Masukkan Username"
              variant="bg-slate-100"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              label="Email"
              type="email"
              title="Masukkan Email"
              variant="bg-slate-100"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Nama Organizer"
              type="text"
              title="Masukkan Nama Organizer"
              variant="bg-slate-100"
              name="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
            />
            <Input
              label="Nomor Telepon"
              type="text"
              title="Masukkan Nomor Telepon"
              variant="bg-slate-100"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              title="Masukkan Password"
              variant="bg-slate-100"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <div className="modal-action">
            <button
                className="btn border-0 text-white bg-secondary hover:bg-cyan-900"
                onClick={handleSubmit}
                disabled={!isFormValid || loading}
              >
                {loading ? "Loading..." : "Tambah Organizer"}
              </button>
              <button
                className="btn text-white bg-primary hover:bg-blue-950"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
