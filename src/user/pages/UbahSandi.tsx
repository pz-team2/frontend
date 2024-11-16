import PasswordInput from "../components/PasswordInput";
import FormCard from "../components/FormCard";
import Button from "../components/ButtonProfile";
import { useState } from "react";

const UbahSandi: React.FC = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password update submitted:", formData);
  };

  return (
    <FormCard title="UBAH SANDI">
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl space-y-6 md:space-y-8"
      >
        <PasswordInput
          label="Sandi Sekarang"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
          show={showPasswords.current}
          onToggleShow={() =>
            setShowPasswords((prev) => ({ ...prev, current: !prev.current }))
          }
        />

        <PasswordInput
          label="Sandi Baru"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          show={showPasswords.new}
          onToggleShow={() =>
            setShowPasswords((prev) => ({ ...prev, new: !prev.new }))
          }
        />

        <PasswordInput
          label="Ulangi Kata Sandi"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          show={showPasswords.confirm}
          onToggleShow={() =>
            setShowPasswords((prev) => ({ ...prev, confirm: !prev.confirm }))
          }
        />

        <div className="flex justify-end pt-6 md:pt-8">
          <Button type="submit">PERBARUI</Button>
        </div>
      </form>
    </FormCard>
  );
};

export default UbahSandi;
