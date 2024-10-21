import { AuthLayout } from "./layouts/AuthLayout";
import FormRegister from "./components/FormRegister";
import gambar from "./assets/img/goevent.png";

const Register = () => {
  return (
    <AuthLayout title="Daftar Ke GoEvent" imageSrc={gambar}>
      <FormRegister />
    </AuthLayout>
  );
};

export default Register;
