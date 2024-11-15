import FormCard from "../components/FormCard";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/ButtonProfile";
import { useState } from "react";

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
    <FormCard title="INFORMASI PRIBADI">
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl space-y-6 md:space-y-8"
      >
        <Input
          label="Nama Lengkap"
          name="namaLengkap"
          value={profile.namaLengkap}
          onChange={handleChange}
        />

        <Input
          label="Username"
          name="username"
          value={profile.username}
          onChange={handleChange}
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Select
            label="Gender"
            name="gender"
            value={profile.gender}
            onChange={handleChange}
            options={[
              { value: "Laki-laki", label: "Laki-laki" },
              { value: "Perempuan", label: "Perempuan" },
            ]}
          />

          <Input
            label="No Whatsapp"
            name="noWhatsapp"
            value={profile.noWhatsapp}
            onChange={handleChange}
          />
        </div>

        <Input
          label="Kota"
          name="kota"
          value={profile.kota}
          onChange={handleChange}
        />

        <div className="flex justify-end pt-6 md:pt-8">
          <Button type="submit">PERBARUI</Button>
        </div>
      </form>
    </FormCard>
  );
};

export default InformasiPribadi;
