import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Layout from "./admin/Layout";
import Register from "./Register";
import DetailOragnizer from "./admin/components/DetailOragnizer";
import { Dashboard } from "./admin/components/Dashboard";
import { Organizer } from "./admin/components/Organizer";
import './App.css';
import LoadingScreen from "./LoadingScreen"; // Komponen loading
import Events from "./user/Events";

export default function App() {
  const [loading, setLoading] = useState(true); // State untuk loading
  const loadingDuration = 3000; // Atur durasi loading screen 

  // Gunakan window.onload dan setTimeout untuk mengontrol durasi loading
  useEffect(() => {
    const handleLoad = () => {
      // Setelah website selesai diload, tambahkan delay menggunakan setTimeout
      setTimeout(() => {
        setLoading(false); // Set loading ke false setelah delay
      }, loadingDuration);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup listener setelah selesai
    return () => window.removeEventListener('load', handleLoad);
  }, [loadingDuration]);

  if (loading) {
    return <LoadingScreen />; // Menampilkan loading screen
  }

  return (
    <div className="bg-white">
      <Router>
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="detail" element={<DetailOragnizer />} />
            <Route path="organizer" element={<Organizer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
