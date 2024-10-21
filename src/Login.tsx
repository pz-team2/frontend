import FormLogin from "./components/FormLogin";
import gambar from "./assets/img/goevent.png";
import { AuthLayout } from "./layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout title="Selamat Datang di GoEvent" imageSrc={gambar}>
      <FormLogin />
    </AuthLayout>
  );
};

export default Login;
