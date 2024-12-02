import React, { useState } from "react";
import { Input } from "../../components/Fragments/Input";
import api from "../../services/api";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";

export const UpdatePassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (
    field: "currentPassword" | "newPassword" | "confirmPassword"
  ) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Kesalahan",
        text: "Password baru tidak cocok",
      });
      return;
    }

    setLoading(true);
    try {
      await api.put("/organizers/updatepassword", {
        password: passwords.currentPassword,
        pwbaru: passwords.newPassword,
        confirmpw: passwords.confirmPassword,
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Password berhasil diperbarui",
      });

      // Reset form
      setPasswords({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setError(null);
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: err.response?.data?.message || "Gagal memperbarui password",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-black font-semibold text-lg">Update Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-3 text-black relative">
          <div className="relative">
            <Input
              label="Masukan Password Lama"
              type={showPasswords.currentPassword ? "text" : "password"}
              title="Masukkan Password Lama"
              variant="bg-slate-100 pr-10"
              name="currentPassword"
              value={passwords.currentPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("currentPassword")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPasswords.currentPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
          <div className="relative">
            <Input
              label="Masukan Password Baru"
              type={showPasswords.newPassword ? "text" : "password"}
              title="Masukkan Password Baru"
              variant="bg-slate-100 pr-10"
              name="newPassword"
              value={passwords.newPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("newPassword")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPasswords.newPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
          <div className="relative">
            <Input
              label="Confirm Password"
              type={showPasswords.confirmPassword ? "text" : "password"}
              title="Konfirmasi Password Baru"
              variant="bg-slate-100 pr-10"
              name="confirmPassword"
              value={passwords.confirmPassword}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => togglePasswordVisibility("confirmPassword")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPasswords.confirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="btn border-0 text-white bg-secondary hover:bg-cyan-900 mt-4"
          disabled={loading}
        >
          {loading ? "Memperbarui..." : "Update Password"}
        </button>
      </form>
    </div>
  );
};
