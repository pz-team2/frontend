import axios from "axios";

// Buat instance Axios dengan konfigurasi baseURL
const api = axios.create({
  baseURL: 'http://127.0.0.1:3500/api/',
});

api.interceptors.response.use(
  (response) => {
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
        window.location.href = "/user/login";
      } else {
        console.error("An error occurred:", error.response.data);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
