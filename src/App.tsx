// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Layout from "./admin/Layout";
import Register from "./Register";
import DetailOragnizer from "./admin/pages/organizer/DetailOragnizer";
import { Dashboard } from "./admin/pages/Dashboard";
import { Organizer } from "./admin/pages/organizer/Organizer";
import './App.css';
// import LoadingScreen from "./LoadingScreen"; // Komponen loading
import Events from "./user/Events";
// import { ProtectedRoute } from "./services/ProtectedRoute";
import { Logout } from "./Logout";
import { DetailEvent } from "./admin/pages/organizer/DetailEvent";
import { TambahEvent } from "./admin/pages/organizer/TambahEvent";
import UpdateEvent from "./admin/pages/organizer/UpdateEvent";
import { DataUser } from "./admin/pages/user/DataUser";
import { Kategori } from "./admin/pages/kategori/Kategori";
import { LayoutOrg } from "./organizer/LayoutOrg";
import { DashboardOrganizer } from "./organizer/Pages/Dashboard";
import { Event } from "./organizer/Pages/Event";
import { Detail } from "./organizer/Pages/Detail";
import { Profile } from "./organizer/Pages/Profile";
import { Pages } from "./Pages";

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
          <Route path="/" element={<Events />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/organizer/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/page" element={<Pages />} />
          
          /* Routing Untuk  Admin */
          <Route path="/" element={<Layout />}>
            <Route path="admin/dashboard" element={<Dashboard />} />
            <Route path="admin/organizer/detail" element={<DetailOragnizer />} />
            <Route path="admin/organizer" element={<Organizer />} />
            <Route path="admin/organizer/event/detail" element={<DetailEvent />} />
            <Route path="admin/organizer/event/tambah" element={<TambahEvent />} />
            <Route path="admin/organizer/event/update" element={<UpdateEvent />} />
            <Route path="admin/user" element={<DataUser />} />
            <Route path="admin/kategori" element={<Kategori />} />
          </Route>

          /* Routing  untuk organizer */
          <Route path="/" element={<LayoutOrg />} >
            <Route path="organizer/dashboard" element={<DashboardOrganizer />} />
            <Route path="organizer/event" element={<Event />} />
            <Route path="organizer/event/detail" element={<Detail />} />
            <Route path="organizer/event/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
