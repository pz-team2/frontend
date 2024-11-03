import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Swal from "sweetalert2";

const FormRegister: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await api.post('/auth/register', { email, password, username });

      Swal.fire({
        title: "Pendaftaran Berhasil!",
        text: "Anda berhasil mendaftar, silakan login.",
        icon: "success",
        confirmButtonText: "Ok"
      }).then(() => {
        navigate("/verify");
      });

    } catch (error: any) {
      // Cek Email Terdaftar
      if ( error.response.status === 400) {
        Swal.fire({
          title: "Email Sudah Terdaftar",
          text: "Email yang Anda gunakan sudah terdaftar, silakan gunakan email lain.",
          icon: "error",
          confirmButtonText: "Ok"
        });
      } else {
        Swal.fire({
          title: "Pendaftaran Gagal",
          text: "Terjadi kesalahan, silakan coba lagi.",
          icon: "error",
          confirmButtonText: "Ok"
        });
      }
      console.error(error);
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={submit}>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white text-sm"
            required
            placeholder="Masukan Username"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white text-sm"
            required
            placeholder="Masukan Email"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white text-sm"
            required
            placeholder="Masukan Password"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 text-white rounded-md transition-all duration-200 hover:bg-blue-700"
          style={{ backgroundColor: '#2EB2C2' }}
        >
          Register
        </button>
      </form>

      <div className="text-sm text-center pt-2">
        Sudah Mempunyai Akun?{" "}
        <Link to="/user/login" className="text-blue-500 hover:underline">
          Login disini !!
        </Link>
      </div>
    </>
  );
};

export default FormRegister;
