
import { Outlet } from "react-router-dom";
import React from 'react'
import '../App.css';
import { VscOrganization } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa6";
import { IoHomeOutline, IoSettingsSharp } from "react-icons/io5";
import { BsCalendarEventFill } from "react-icons/bs";
import gambar from '../assets/img/admin.png'
import { Sidebar } from "../components/Layout/Sidebar";


const Layout = () => {

  const Menu = [
    { text: 'Dashboard', icon: <IoHomeOutline size={20} />, path: '/admin/dashboard' },
    { text: 'Organizer', icon: <VscOrganization size={20} />, path: '/admin/organizer' },
    { text: 'Event', icon: <BsCalendarEventFill size={20} />, path: '/admin/event' },
    { text: 'User', icon: <FaRegUser size={20} />, path: '/admin/user' },
    { text: 'Setting', icon: <IoSettingsSharp size={20} />, path: '/admin/kategori' },
  ]

  return (
    <div className="flex h-screen">
      <Sidebar menuItems={Menu} gambar={gambar} />
      <div className="flex-grow overflow-auto p-10 md:p-28 sm:p-10 lg:p-16 pb-40">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

