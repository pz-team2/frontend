import { useEffect } from 'react';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../Redux/hook';
import { setEmail, setPassword, login } from '../Redux/features/auth/authslice';

const FormLogin: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { email, password, message, isLogged } = useAppSelector((state) => state.auth);

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);
  
  useEffect(() => {
    console.log(isLogged);
    if (isLogged) {
      Swal.fire({
        title: 'Login Berhasil!',
        text: 'Selamat, Anda berhasil login.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate("/");
      });
    } else if (message) {
      Swal.fire({
        title: 'Login Gagal! ',
        text: message,
        icon: 'error',
        confirmButtonText: 'Coba Lagi',
      });
    }
  }, [isLogged, message, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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

      <div className="text-sm text-center pt-2">
        Belum punya akun?{' '}
        <Link to="/user/register" className="text-blue-500 hover:underline">
          Daftar
        </Link>
      </div>
    </>
  );
};

export default FormLogin;
