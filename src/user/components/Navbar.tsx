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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useState(true);

  return (
    <div className="navbar bg-primary py-4 px-4 md:px-20">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      {/* Conditional rendering based on login status */}
      <div className="flex-1 flex justify-end">
        {!isLoggedIn ? (
          // When not logged in, show login and signup buttons
          <div className="hidden md:flex gap-4">
            <Link
              to="/user/login"
              className="flex items-center justify-center border-2 border-white text-white px-6 py-2 rounded-md text-sm font-medium hover:border-none hover:bg-[#1B9AAB] hover:text-white active:bg-[#188A99] transition-all duration-300"
            >
              Login
            </Link>
            <Link
              to="/user/register"
              className="flex bg-[#1B9AAB] items-center justify-center text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-transparent hover:border-2 hover:border-white active:bg-[#238F9D] focus:border-none transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          // When logged in, show the navigation menu
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link
              to="/user/ticket"
              className="flex items-center space-x-2 text-white"
            >
              <GiTicket size={25} />
              <span>My Ticket</span>
            </Link>
            <Link
              to="/user/riwayat-transaksi"
              className="flex items-center space-x-2 text-white"
            >
              <FaMoneyCheckDollar size={25} />
              <span>Transaksi</span>
            </Link>
            <Link
              to="/hubungi-kami"
              className="flex items-center space-x-2 text-white"
            >
              <BiSolidPhoneCall size={25} />
              <span>Hubungi Kami</span>
            </Link>

            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar"
                role="button"
              >
                <div className="text-center text-white bg-secondary p-2 rounded-full">
                  <CgProfile size={25} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-primary text-white z-20 rounded-box mt-3 w-52 p-2 shadow"
              >
                <li>
                  <span>Profile Name</span>
                </li>
                <li>
                  <Link to="/user/profile">
                    <FaUserEdit size={20} />
                    Informasi Pribadi
                  </Link>
                </li>
                <li>
                  <Link to="/logout">
                    <IoIosLogOut size={20} />
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
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
          <ul className="menu menu-compact absolute right-4 top-16 bg-primary rounded-box w-52 p-2 shadow z-20">
            {!isLoggedIn ? (
              // Mobile auth buttons when not logged in
              <>
                <li>
                  <Link
                    to="/user/login"
                    className="flex items-center space-x-2 text-white"
                  >
                    <span>Log in</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user/register"
                    className="flex items-center space-x-2 text-white"
                  >
                    <span>Sign Up</span>
                  </Link>
                </li>
              </>
            ) : (
              // Mobile menu items when logged in
              <>
                <li>
                  <span className="text-white">Profile Name</span>
                </li>
                <li>
                  <Link
                    to="/user/profile"
                    className="flex items-center space-x-2 text-white"
                  >
                    <FaUserEdit size={20} />
                    <span>Informasi Pribadi</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user/ticket"
                    className="flex items-center space-x-2 text-white"
                  >
                    <GiTicket size={20} />
                    <span>My Ticket</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user/riwayat-transaksi"
                    className="flex items-center space-x-2 text-white"
                  >
                    <FaMoneyCheckDollar size={20} />
                    <span>Transaksi</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hubungi-kami"
                    className="flex items-center space-x-2 text-white"
                  >
                    <BiSolidPhoneCall size={20} />
                    <span>Hubungi Kami</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="flex items-center space-x-2 text-white">
                    <IoIosLogOut size={20} />
                    <span>Logout</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;