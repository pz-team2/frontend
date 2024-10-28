import { Outlet } from "react-router-dom";
import { useState } from "react";
import UserSidebar from "../pages/UserSidebar";


export const UserLayout = () => {
  return (
    <div className="flex min-h-screen">
      <UserSidebar />
      <div className="flex-grow p-4 md:p-6 lg:p-8 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
};

const InformasiPribadi: React.FC = () => {
  const [profile, setProfile] = useState({
    namaLengkap: "Fauzan Saputra",
    username: "Fauzan",
    email: "Fauzan@gmail.com",
    gender: "Laki-laki",
    noWhatsapp: "08127890568",
    kota: "Kab.Banjarbaru",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", profile);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-lg min-h-[calc(100vh-4rem)]">
        <h1 className="text-[#12496E] text-3xl font-bold mb-12">
          INFORMASI PRIBADI
        </h1>

        <form onSubmit={handleSubmit} className="max-w-6xl space-y-8">
          <div className="space-y-4">
            <label className="block text-[#12496E] text-xl font-semibold">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="namaLengkap"
              value={profile.namaLengkap}
              onChange={handleChange}
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent bg-white"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-[#12496E] text-xl font-semibold">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleChange}
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent bg-white"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-[#12496E] text-xl font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent bg-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="block text-[#12496E] text-xl font-semibold">
                Gender
              </label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent bg-white"
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div className="space-y-4">
              <label className="block text-[#12496E] text-xl font-semibold">
                No Whatsapp
              </label>
              <input
                type="text"
                name="noWhatsapp"
                value={profile.noWhatsapp}
                onChange={handleChange}
                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent bg-white"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="block text-[#12496E] text-xl font-semibold">
              Kota
            </label>
            <input
              type="text"
              name="kota"
              value={profile.kota}
              onChange={handleChange}
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#30BFCA] focus:border-transparent bg-white"
            />
          </div>

          <div className="flex justify-end pt-8">
            <button
              type="submit"
              className="bg-[#12496E] hover:bg-[#0d3655] text-white text-xl font-semibold px-12 py-4 rounded-xl transition-colors"
            >
              PERBARUI
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InformasiPribadi;