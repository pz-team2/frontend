import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { useAppDispatch, useAppSelector } from '../Redux/hook';
import { useEffect } from 'react';
import { setUsername, setPassword, setEmail, register } from '../Redux/features/auth/authslice';

const FormRegister: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { username, email, password, message, isRegistered } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isRegistered) {
      Swal.fire({
        title: "Pendaftaran Berhasil!",
        text: "Anda berhasil mendaftar, silakan login.",
        icon: "success",
        confirmButtonText: "Ok"
      }).then(() => {
        navigate("/verify");
      });
    } else if (message) {
      Swal.fire({
        title: "Pendaftaran Gagal",
        text: message,
        icon: "error",
        confirmButtonText: "Ok"
      });
    }
  }, [isRegistered, message, navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register({ email, password, username }));
  }

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
            onChange={(e) => dispatch(setUsername(e.target.value))} // Dispatch setUsername
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
            onChange={(e) => dispatch(setEmail(e.target.value))} // Dispatch setEmail
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
            onChange={(e) => dispatch(setPassword(e.target.value))} // Dispatch setPassword
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
