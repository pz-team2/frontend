// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Layout from "./admin/Layout";
import Register from "./Register";
import { Dashboard } from "./admin/pages/Dashboard";
import { Organizer } from "./admin/pages/event/Organizer";
import "./App.css";
// import LoadingScreen from "./LoadingScreen"; // Komponen loading
import EventDetail from "./user/pages/EventDetail";
import { Logout } from "./Logout";
import { DetailEvent } from "./admin/pages/event/DetailEvent";
import { TambahEvent } from "./admin/pages/event/TambahEvent";
import { UpdateEvent } from "./admin/pages/event/UpdateEvent";
import { DataUser } from "./admin/pages/user/DataUser";
import { Kategori } from "./admin/pages/kategori/Kategori";
import { LayoutOrg } from "./organizer/LayoutOrg";
import { DashboardOrganizer } from "./organizer/Pages/Dashboard";
import { Event } from "./organizer/Pages/Event";
import { Detail } from "./organizer/Pages/Detail";
import { Profile } from "./organizer/Pages/Profile";
import { Hubungi } from "./user/pages/Hubungi";
import Selengkapnya from "./user/pages/Selengkapnya";
import HomePage from "./user/pages/HomePage";
import InformasiPribadi from "./user/pages/InformasiPribadi";
import UserLayout from "./user/Layouts/UserLayout";
import TiketSaya from "./user/components/TiketSaya";
import DetailTiket from "./user/components/DetailTiket";
import RiwayatTransaksi from "./user/components/RiwayatTransaksi";
import UbahSandi from "./user/pages/UbahSandi";
import VerifyEmail from "./verifyEmail";
import { Verify } from "./Verify";
import { ProtectedRoute } from "./services/ProtectedRoute";
import { Pages } from "./Pages";
import DetailOrganizer from "./admin/pages/event/DetailOragnizer";
import LoginOrganizer from "./LoginOrganizer";
import { EventData } from "./admin/pages/event/Event";
import HomeLayout from "./user/Layouts/HomeLayout";

export default function App() {
  // const [loading, setLoading] = useState(true); // State untuk loading
  // const loadingDuration = 1000; // Atur durasi loading screen

  // // Gunakan window.onload dan setTimeout untuk mengontrol durasi loading
  // useEffect(() => {
  //   const handleLoad = () => {
  //     // Setelah website selesai diload, tambahkan delay menggunakan setTimeout
  //     setTimeout(() => {
  //       setLoading(false); // Set loading ke false setelah delay
  //     }, loadingDuration);
  //   };

  //   window.addEventListener('load', handleLoad);

  //   // Cleanup listener setelah selesai
  //   return () => window.removeEventListener('load', handleLoad);
  // }, [loadingDuration]);

  // if (loading) {
  //   return <LoadingScreen />; // Menampilkan loading screen
  // }

  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/selengkapnya" element={<Selengkapnya />} />
            <Route path="/hubungi-kami" element={<Hubungi />} />
            <Route path="/detail/:id" element={<EventDetail />} />
          </Route>
          <Route path="/page" element={<Pages />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/organizer/login" element={<LoginOrganizer />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />
          <Route path="/verify" element={<Verify />} />

          {/* User Layout */}

          <Route path="/user" element={<UserLayout />}>
            <Route path="profile" element={<InformasiPribadi />} />
            <Route path="ticket" element={<TiketSaya />} />
            <Route path="tiket/:id" element={<DetailTiket />} />
            <Route path="ubah-sandi" element={<UbahSandi />} />
            <Route path="riwayat-transaksi" element={<RiwayatTransaksi />} />
          </Route>

          {/* Admin Layout */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="admin/dashboard" element={<Dashboard />} />
            <Route
              path="admin/organizer/detail/:id"
              element={<DetailOrganizer />}
            />
            <Route path="admin/organizer/update/:id" element={<Organizer />} />
            <Route path="admin/organizer" element={<Organizer />} />
            <Route
              path="admin/organizer/event/detail/:id"
              element={<DetailEvent />}
            />
            <Route
              path="admin/organizer/event/tambah/:id"
              element={<TambahEvent />}
            />
            <Route
              path="admin/organizer/event/update/:id"
              element={<UpdateEvent />}
            />
            <Route path="admin/user" element={<DataUser />} />
            <Route path="admin/event" element={<EventData />} />
            <Route path="admin/kategori" element={<Kategori />} />
          </Route>

          {/* Organizer Layout */}
          <Route path="/" element={<LayoutOrg />}>
            <Route
              path="organizer/dashboard"
              element={<DashboardOrganizer />}
            />
            <Route path="organizer/event" element={<Event />} />
            <Route path="organizer/event/detail/:id" element={<Detail />} />
            {/* <Route path="organizer/event/detail/:id" element={<Detail />} /> */}
            <Route path="organizer/event/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
