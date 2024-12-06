import gambar from "./assets/img/goevent.png";
import { AuthLayout } from "./layouts/AuthLayout";
import { Link } from "react-router-dom";
import React from "react";

export const Pages = () => {
    return (
        <div>
            <AuthLayout title="Selamat Datang di GoEvent" imageSrc={gambar}>
                <div className="flex flex-col gap-3">
                    <h1> Silahkan Pilih Role :</h1>
                    <Link to='/organizer/login' className="btn bg-secondary border-0 text-white hover:bg-cyan-600"> Admin Organizer </Link>
                    <Link to='/user/login' className="btn bg-secondary border-0 text-white hover:bg-cyan-600"> User </Link>
                </div>
            </AuthLayout>
        </div>
    )
}
