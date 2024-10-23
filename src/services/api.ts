import axios from "axios";

// Buat instance Axios dengan konfigurasi baseURL
const api = axios.create({
  baseURL: 'http://127.0.0.1:3500/api/',
});

// Interceptor untuk menangani respons
api.interceptors.response.use(
  (response) => {
    // Jika respons sukses, lanjutkan prosesnya
    return response;
  },
  (error) => {
    // Jika ada error
    if (error.response) {
      const { status } = error.response;

      // Cek jika status 401 atau 403, yang berarti token sudah kadaluarsa atau akses ditolak
      if (status === 401 || status === 403) {
        console.error("Session expired or unauthorized access");

        // Hapus token dari localStorage
        localStorage.removeItem("token");

        // Arahkan kembali ke halaman login
        window.location.href = "/login";
      } else {
        // Tangani error selain 401 dan 403
        console.error("An error occurred:", error.response.data);
      }
    }

    // Lanjutkan melempar error agar bisa ditangani di tempat lain
    return Promise.reject(error);
  }
);

export default api;
