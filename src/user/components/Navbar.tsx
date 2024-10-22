import { Link } from "react-router-dom";
import logo from "../../assets/img/goevent-w.png";
import "../../App.css";
import { GiTicket } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle untuk mobile menu

  return (
    <div className="navbar bg-custom-secondary py-4 px-4 md:px-20">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* <div className="flex gap-4">
        <Link
          to="/login" // Mengarahkan ke halaman login
          className="border border-[#2EB2C2] text-[#2EB2C2] px-4 py-2 rounded hover:bg-[#1B9AAB] hover:text-white active:bg-[#188A99] focus:outline-none focus:ring focus:ring-teal-300"
        >
          Login
        </Link>
        <Link
          to="/register" // Mengarahkan ke halaman register
          className="bg-[#2EB2C2] text-white px-4 py-2 rounded hover:bg-[#28A4B1] active:bg-[#238F9D] focus:outline-none focus:ring focus:ring-teal-300"
        >
          Sign Up
        </Link>
      </div> */}

      {/* Navigasi & Avatar (Desktop & Mobile) */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/my-ticket" className="flex items-center space-x-2 text-white">
          <GiTicket size={25} />
          <span>My Ticket</span>
        </Link>
        <Link to="/transaksi" className="flex items-center space-x-2 text-white">
          <FaMoneyCheckDollar size={25} />
          <span>Transaksi</span>
        </Link>
        <Link to="/hubungi-kami" className="flex items-center space-x-2 text-white">
          <BiSolidPhoneCall size={25} />
          <span>Hubungi Kami</span>
        </Link>

        
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
            role="button"
          >
            <div className="text-center text-white bg-custom-toska p-2 rounded-full">
              <CgProfile size={25} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-custom-secondary z-20 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="flex items-center text-white">
                <CgProfile size={20} />
                <span>Profile Name</span>
              </Link>
            </li>
            <li>
              <Link to="/informasi-pribadi" className="text-white">
              <FaUserEdit size={20} />
                Informasi Pribadi
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-white"> 
                <IoIosLogOut size={20} />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          className="btn btn-ghost btn-circle text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {isOpen && (
          <ul className="menu menu-compact absolute right-4 top-16 bg-custom-secondary rounded-box w-52 p-2 shadow z-20">
            <li>
              <Link to="/profile" className="flex items-center space-x-2 text-white">
                <CgProfile size={20} />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="/my-ticket" className="flex items-center space-x-2 text-white">
                <GiTicket size={20} />
                <span>My Ticket</span>
              </Link>
            </li>
            <li>
              <Link to="/transaksi" className="flex items-center space-x-2 text-white">
                <FaMoneyCheckDollar size={20} />
                <span>Transaksi</span>
              </Link>
            </li>
            <li>
              <Link to="/hubungi-kami" className="flex items-center space-x-2 text-white">
                <BiSolidPhoneCall size={20} />
                <span>Hubungi Kami</span>
              </Link>
            </li>
            <li>
              <Link to="/settings" className="text-white">Settings</Link>
            </li>
            <li>
              <Link to="/login" className="text-white">Logout</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
