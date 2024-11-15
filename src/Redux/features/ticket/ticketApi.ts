// src/api/ticketApi.ts
import api from "../../../services/api";

// Fungsi untuk mengambil semua tiket milik pengguna
export const getTicketsByUserId = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("Token tidak ditemukan. Silakan login terlebih dahulu.");
    }

    // Mengirim permintaan ke API untuk mendapatkan tiket berdasarkan ID pengguna
    const response = await api.get("/tickets", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; // Mengembalikan data tiket
  } catch (error) {
    console.error("Gagal Mengambil Data Ticket", error);
    return { success: false, message: "Gagal Mengambil Data Ticket" };
  }
};

// Fungsi untuk mengambil tiket berdasarkan ID
export const getTicketByPaymentId = async (ticketId: string) => {
  try {
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   throw new Error("Token tidak ditemukan. Silakan login terlebih dahulu.");
    // }

    // Mengirim permintaan ke API untuk mendapatkan detail tiket berdasarkan ID tiket
    const response = await api.get(`/tickets/${ticketId}`);

    return response.data.data; // Mengembalikan data tiket
  } catch (error) {
    console.error("Gagal Mengambil Data Ticket", error);
    return { success: false, message: "Gagal Mengambil Data Ticket" };
  }
};
