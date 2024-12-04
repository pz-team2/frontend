import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

interface TicketCounterProps {
  price: number;
  quota: number;
  eventId: string;
}

const TicketCounter: React.FC<TicketCounterProps> = ({ price, quota, eventId }) => {
  const [count, setCount] = useState(0);
  const totalPrice = count * price;
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState<any>(null); // Simpan data profil user
  const [loading, setLoading] = useState(true); // Loading state untuk menunggu profil

  // Ambil data profil pengguna
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get("/users/detail"); // Asumsi ada endpoint untuk mendapatkan profil pengguna
        setUserProfile(response.data.data.user);
        console.log(response.data.data.user)
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setLoading(false); // Setelah data diambil, set loading menjadi false
      }
    };

    fetchUserProfile();
  }, []);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const handlePayment = async () => {
    if (loading) {
      Swal.fire({
        icon: "info",
        title: "Loading...",
        text: "Tunggu sebentar, profil sedang dimuat.",
      });
      return;
    }

    // Cek apakah user sudah mengisi nomor telepon
    if (!userProfile?.phoneNumber?.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Profil Belum Lengkap",
        text: "Silakan lengkapi nomor telepon Anda di profil sebelum melanjutkan pembayaran.",
      }).then(() => {
        // Arahkan ke halaman profil jika nomor telepon belum ada
        navigate("/user/profile");
      });
      return;
    }

    if (count === 0) {
      Swal.fire({
        icon: "info",
        title: "Warning!",
        text: "Masukan Jumlah Ticket Yang Di Pesan...",
      });
      return;
    }

    // Cek apakah jumlah tiket yang dipesan lebih besar dari kuota yang tersedia
    if (count > quota) {
      Swal.fire({
        icon: "error",
        title: "Kuota Tidak Cukup!",
        text: `Jumlah tiket yang dipesan melebihi kuota yang tersedia (${quota} tiket)`,
      });
      return;
    }

    try {
      // Kirim request ke backend untuk mendapatkan token pembayaran
      const response = await api.post(`/payments/data/${eventId}`, { quantity: count });
      const { paymentToken } = response.data.data;

      // Panggil Snap API untuk memulai proses pembayaran
      window.snap.pay(paymentToken, {
        onSuccess: function (result: any) {
          Swal.fire({
            icon: "success",
            title: "Pembayaran Berhasil!",
            text: "Silahkan Cek Ticket Anda.",
          });
          navigate(`/user/ticket`);
          console.log(result);
        },
        onPending: function (result: any) {
          alert("Menunggu pembayaran...");
          Swal.fire({
            icon: "info",
            title: "Pembayaran!",
            text: "Menunggu Pembayaran ...",
          });
          console.log(result);
          return;
        },
        onError: function (result: any) {
          Swal.fire({
            icon: "error",
            title: "Gagal!",
            text: "Pembayaran Gagal Di Lakukan  Silahkan Ulangi Kembali",
          });
          console.log(result);
        },
        onClose: function () {
          Swal.fire({
            title: "Anda Yakin?",
            text: "Untuk Menutup Pembayaran Sebelum Selesai!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Tutup Pembayaran"
          });
        },
      });
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal!",
        text: "Pembayaran Gagal Di Proses",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center w-full gap-2 md:gap-4 p-2 md:p-4">
      <div className="w-full md:w-1/2 flex items-center justify-between border border-primary rounded-lg px-3 py-2 md:px-4 md:py-2">
        <div className="flex flex-col">
          <span className="text-primary text-xs md:text-sm">Rp. {price.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={decrement}
            className="btn btn-circle btn-sm md:btn-md bg-primary border-primary text-white"
          >
            -
          </button>
          <span className="text-base md:text-lg font-semibold text-primary">{count}</span>
          <button
            onClick={increment}
            className="btn btn-circle btn-sm md:btn-md bg-primary border-primary text-white"
          >
            +
          </button>
        </div>
      </div>

      <div className="w-full md:w-[40%] flex flex-col items-center text-center border border-primary rounded-lg px-3 py-2 md:px-4 md:py-2">
        <span className="font-semibold text-primary text-base md:text-lg">Total</span>
        <span className="text-primary text-xs md:text-sm">Rp. {totalPrice.toLocaleString()}</span>
      </div>

      <button
        onClick={handlePayment}
        className="w-full md:w-[10%] btn btn-lg bg-primary text-white text-sm font-semibold rounded-lg px-3 py-2 md:px-6 md:py-2"
      >
        LANJUTKAN
      </button>
    </div>
  );
};

export default TicketCounter;
