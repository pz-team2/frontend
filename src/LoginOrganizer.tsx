import gambar from "./assets/img/organizer.png";
import { AuthLayout } from "./layouts/AuthLayout";
import FormLoginOrganizer from "./auth/FormLoginOrganizer";

const LoginOrganizer = () => {
  return (
    <AuthLayout title="Selamat Datang di GoEvent" imageSrc={gambar}>
      <FormLoginOrganizer />
    </AuthLayout>
  );
};

export default LoginOrganizer;
