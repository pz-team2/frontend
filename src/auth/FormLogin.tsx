import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../services/api';

const FormLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('auth/login', { email, password });
      
      if (response.data.success) {
        const { token } = response.data.data; // Mengambil token dari response.data.data

        // Simpan token ke localStorage
        localStorage.setItem('token', token);

        Swal.fire({
          title: 'Login Berhasil!',
          text: 'Selamat, Anda berhasil login.',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate("/admin/dashboard");
        });

        // Navigasi ke dashboard sesuai dengan peran pengguna
      } else {
        setMessage(response.data.message || 'Login gagal');
        Swal.fire({
          title: 'Login Gagal!',
          text: message || 'Email atau password salah.',
          icon: 'error',
          confirmButtonText: 'Coba Lagi',
        });
      }
    } catch (error: any) {
      setMessage('Terjadi kesalahan, silakan coba lagi.');

      Swal.fire({
        title: 'Login Gagal!',
        text: message || 'Email atau password salah.',
        icon: 'error',
        confirmButtonText: 'Coba Lagi',
      });
    }
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
