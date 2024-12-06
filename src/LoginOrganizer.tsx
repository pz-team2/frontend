import gambar from "./assets/img/organizer.png";
import { AuthLayout } from "./layouts/AuthLayout";
import FormLoginOrganizer from "./auth/FormLoginOrganizer";
import React from "react";

const LoginOrganizer = () => {
  return (
    <AuthLayout title="Selamat Datang di GoEvent" imageSrc={gambar}>
      <FormLoginOrganizer />
    </AuthLayout>
  );
};

export default LoginOrganizer;
