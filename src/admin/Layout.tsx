import { Outlet } from "react-router-dom";
import Sidebar from "../components/Layout/Sidebar";
import '../App.css';
import { VscOrganization } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa6";
import { IoHomeOutline, IoSettingsSharp } from "react-icons/io5";


const Layout = () => {

  const Menu = [
    { text: 'Dashboard', icon: <IoHomeOutline size={20} />, path: '/admin/dashboard' },
    { text: 'Organizer', icon: <VscOrganization size={20} />, path: '/admin/organizer' },
    { text: 'User', icon: <FaRegUser size={20} />, path: '/admin/user' },
    { text: 'Setting', icon: <IoSettingsSharp size={20} />, path: '/admin/kategori' }
  ]

  return (
    <div className="flex h-screen">
      <Sidebar menuItems={Menu} />
      <div className="flex-grow overflow-auto p-10 md:p-28 sm:p-10 lg:p-16 pb-40">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
