import React, { useEffect, useState } from "react";
import FormCard from "../components/FormCard";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/ButtonProfile";
import { IUser } from "../../Redux/types/user.types";
import api from "../../services/api";

const InformasiPribadi = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch user data
  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await api.get("/users/detail/me");

      if (response.data.success) {
        const userData = response.data.data.user;
        // Inisialisasi nilai default untuk field yang kosong
        const userWithDefaults = {
          ...userData,
          fullName: userData.fullName || "",
          phoneNumber: userData.phoneNumber || "",
          city: userData.city || "",
          gender: userData.gender || "male", 
        };
        setUser(userWithDefaults);
        setError(null);
      } else {
        setError(response.data.message || "Gagal mengambil data user");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Gagal mengambil data user");
        console.error("Error fetching user data:", err);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;
    if (user) {
      const updatedUser = { ...user };

      switch (name) {
        case "fullName":
          updatedUser.fullName = value;
          break;
        case "phoneNumber":
          updatedUser.phoneNumber = value;
          break;
        case "city":
          updatedUser.city = value;
          break;
        default:
          updatedUser[name as keyof IUser] = value;
      }

      setUser(updatedUser);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) return;

    if (!user.fullName || !user.phoneNumber || !user.city) {
      setError("Mohon lengkapi semua field yang diperlukan");
      return;
    }

    try {
      setLoading(true);
      const response = await api.put(`/users/update`, {
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        gender: user.gender,
        phoneNumber: user.phoneNumber,
        city: user.city,
      });

      if (response.data.success) {
        setUser(response.data.data);
        setError(null);
        alert("Data berhasil diperbarui!");
      } else {
        setError(response.data.message || "Gagal memperbarui data user");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Gagal memperbarui data user");
      } else {
        setError("Kesalahan tidak diketahui");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <FormCard title="INFORMASI PRIBADI">
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl space-y-6 md:space-y-8"
      >
        <Input
          label="Nama Lengkap"
          name="fullName"
          value={user?.fullName || ""}
          onChange={handleChange}
          required
        />

        <Input
          label="Username"
          name="username"
          value={user?.username || ""}
          onChange={handleChange}
          disabled
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={user?.email || ""}
          onChange={handleChange}
          disabled
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Select
            label="Gender"
            name="gender"
            value={user?.gender || "male"}
            onChange={handleChange}
            options={[
              { value: "male", label: "Laki-laki" },
              { value: "female", label: "Perempuan" },
            ]}
            required
          />

          <Input
            label="No Whatsapp"
            name="phoneNumber"
            value={user?.phoneNumber || ""}
            onChange={handleChange}
            required
          />
        </div>

        <Input
          label="Kota"
          name="city"
          value={user?.city || ""}
          onChange={handleChange}
          required
        />

        <div className="flex justify-end pt-6 md:pt-8">
          <Button type="submit">PERBARUI</Button>
        </div>
      </form>
    </FormCard>
  );
};

export default InformasiPribadi;
