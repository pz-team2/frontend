import { useEffect } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../Redux/hook';
import { loginOragnizer, setEmail, setPassword } from '../Redux/features/organizer/loginOrganizerSlice';

const FormLoginOrganizer: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { email, password, message, role, isLogged } = useAppSelector((state) => state.loginOrganizer);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    console.log(role)
    
    // Jika token ditemukan dan role ada, arahkan berdasarkan role
    if (token && storedRole) {
      if (storedRole === 'admin') {
        navigate('/admin/dashboard');
      } else if (storedRole === 'organizer') {
        navigate('/organizer/dashboard');
      } else {
        navigate('/');
      }
    }
  }, [navigate]);

  // Effect untuk menangani setelah login berhasil atau gagal
  useEffect(() => {
    console.log("isLoggedIn:", isLogged);
    console.log("role:", role);

    if (isLogged) {
      Swal.fire({
        title: 'Login Berhasil!',
        text: 'Selamat, Anda berhasil login.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Cek role pengguna dan arahkan ke halaman yang sesuai
        if (role === 'admin') {
          navigate("/admin/dashboard");
        } else if (role === 'organizer') {
          navigate("/organizer/dashboard");
        } else {
          navigate("/"); // Jika role tidak dikenali, arahkan ke halaman default
        }
      });
    } else if (message) {
      Swal.fire({
        title: 'Login Gagal!',
        text: message,
        icon: 'error',
        confirmButtonText: 'Coba Lagi',
      });
    }
  }, [isLogged, message, navigate, role]);

  // Menangani form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginOragnizer({ email, password, role }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white text-sm"
            required
            placeholder="Masukan Email"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white text-sm"
            required
            placeholder="Masukan Password"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 text-white rounded-md transition-all duration-200"
          style={{ backgroundColor: '#2EB2C2', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>

      {/* Tampilkan pesan kesalahan jika ada */}
      {message && (
        <div className="mt-4 text-center text-red-500">
          {message}
        </div>
      )}
    </>
  );
};

export default FormLoginOrganizer;
