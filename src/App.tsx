import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Layout from "./admin/Layout";
import Register from "./Register";
import './App.css'
import DetailOragnizer from "./admin/components/DetailOragnizer";
import { Dashboard } from "./admin/components/Dashboard";
import { Organizer } from "./admin/components/Organizer";

export default function App() {
  return (
    <div className="bg-white">
      <Router>
        <Routes>
          {/* Route default ke halaman Login */}
          <Route path="/" element={<Login />} />
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
