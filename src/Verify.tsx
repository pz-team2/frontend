import { Button } from "./components/Fragments/Button";
import { CardVerify } from "./components/Layout/CardVerify"
import { FcHighPriority } from "react-icons/fc";
import React from "react";

export const Verify = () => {
  return (
    <div>
      <CardVerify judul="Verifikasi Akun !!" icons={<FcHighPriority size={90} />} text=" Registrasi Berhasil , Cek Email Untuk Verifikasi Akun">
        <Button variant="bg-red-400 hover:bg-red-500 "> Cek Email Anda ! </Button>
      </CardVerify>
    </div>
  )
}
