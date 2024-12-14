import React, { useState, useEffect } from "react";
import { Input } from "../../components/Input";
import api from "../../services/api";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const [profile, setProfile] = useState({
    username: "",
    organizerName: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error] = useState<string | null>(null);
  const [initialProfile, setInitialProfile] = useState({
    username: "",
    organizerName: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get("organizers/profile");
      const profileData = response.data.data;
      setProfile(profileData);
      setInitialProfile(profileData);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Gagal mengambil data profil",
      });
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put("/organizers/updateprofile", profile);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Profil berhasil diperbarui",
      });
      fetchProfile();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Gagal memperbarui profil",
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const hasProfileChanged = () => {
    return JSON.stringify(initialProfile) !== JSON.stringify(profile);
  };

  return (
    <div className="p-5">
      <h1 className="text-black font-semibold text-lg">Update Profile</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 text-black">
          <Input
            label="Username"
            type="text"
            title="Masukkan Username"
            variant="bg-slate-100"
            name="username"
            value={profile.username}
            onChange={handleChange}
          />
          <Input
            label="Nama Organizer"
            type="text"
            title="Masukkan Nama Organizer"
            variant="bg-slate-100"
            name="organizerName"
            value={profile.organizerName}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            title="Masukkan Email"
            variant="bg-slate-100"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
          <Input
            label="No Handphone"
            type="tel"
            title="Masukkan Nomor Handphone"
            variant="bg-slate-100"
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn border-0 text-white bg-secondary hover:bg-cyan-900 mt-4"
          disabled={loading || !hasProfileChanged()}
        >
          {loading ? "Memperbarui..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
