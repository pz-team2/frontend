import gambar from './assets/img/goevent.png';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundColor: "#12496E", font: 'Poppins, sans-serif' }}>
      {/* Kontainer Card */}
      <div className="flex flex-col md:flex-row bg-white w-full max-w-4xl shadow-xl p-8 mx-4 md:mx-0 rounded-2xl">
        
        {/* Gambar di bagian atas di layar kecil, dan di sebelah kiri di layar besar */}
        <div className="flex-1 flex justify-center items-center mb-6 md:mb-0">
          <img 
            src={gambar} 
            alt="Event" 
            className="w-72 max-w-xs h-auto md:max-w-sm " 
            // max-w-xs: Ukuran gambar kecil saat mobile
            // max-w-sm: Ukuran gambar lebih besar saat di layar besar (md ke atas)
          />
        </div>

        {/* Form di bawah gambar di layar kecil, dan di sebelah kanan di layar besar */}
        <div className="flex-1 space-y-6 p-8">
          <h2 className="text-center text-2xl font-bold tracking-widest text-black ">Daftar Ke Goevent</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white"
                required placeholder="Masukan Username"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white"
                required placeholder="Masukan Email"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-800 bg-white"
                required placeholder="Masukan Password"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white rounded-md" style={{backgroundColor: '#2EB2C2'}}
            >
              Register
            </button>
          </form>
          <div className="text-sm text-center">
          Sudah Mempunyai Akun?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login disini !!
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
