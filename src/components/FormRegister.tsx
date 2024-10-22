import React from 'react';
import { Link } from 'react-router-dom';

const FormRegister: React.FC = () => {
  return (
    <>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Username
          </label>
          <input
            type="text"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white text-sm"
            required
            placeholder="Masukan Password"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 text-white rounded-md transition-all duration-200"
          style={{backgroundColor: '#2EB2C2'}}
        >
          Register
        </button>
      </form>

      <div className="text-sm text-center pt-2">
        Sudah Mempunyai Akun?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login disini !!
        </Link>
      </div>
    </>
  );
};

export default FormRegister;