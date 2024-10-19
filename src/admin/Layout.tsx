import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import '../App.css';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto p-10 md:p-30 sm:p-10 lg:p-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
