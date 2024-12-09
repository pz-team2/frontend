import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaTicketAlt, FaKey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/img/goevent-w.png";

interface MenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

interface UserSidebarProps {
  onClose?: () => void;
}

const UserSidebar: React.FC<UserSidebarProps> = ({ onClose }) => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      text: "Informasi Pribadi",
      icon: <CgProfile className="w-5 h-5" />,
      path: "/user/profile",
    },
    {
      text: "Tiket Saya",
      icon: <FaTicketAlt className="w-5 h-5" />,
      path: "/user/ticket",
    },
    {
      text: "Riwayat Transaksi",
      icon: <FaMoneyCheckDollar size={25} />,
      path: "/user/riwayat-transaksi",
    },
    {
      text: "Ubah Sandi",
      icon: <FaKey className="w-5 h-5" />,
      path: "/user/ubah-sandi",
    },
  ];

  return (
    <div className="bg-[#12496E] text-white w-64 min-h-screen flex flex-col">
      {/* Close button for mobile */}
      <button
        className="md:hidden absolute top-4 right-4 text-white"
        onClick={onClose}
      >
        ✕
      </button>

      
      <div className="p-4 mb-4 md:mb-8 flex justify-center">
        <Link to="/" onClick={onClose}>
          <img src={logo} alt="GoEvent Logo" className="w-24 md:w-32" />
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="flex-1">
        <ul className="space-y-1 md:space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 text-base md:text-lg transition-colors
                  ${
                    location.pathname === item.path
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  }`}
              >
                <span className="text-gray-300">{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
