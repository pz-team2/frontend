// UserSidebar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaTicketAlt, FaExchangeAlt, FaKey } from "react-icons/fa";
import logo from "../../assets/img/goevent-w.png";

interface MenuItem {
  text: string;
  icon: JSX.Element;
  path: string;
}

const UserSidebar: React.FC = () => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      text: "Informasi Pribadi",
      icon: <FaUser className="w-5 h-5" />,
      path: "/user/profile",
    },
    {
      text: "Tiket Saya",
      icon: <FaTicketAlt className="w-5 h-5" />,
      path: "/user/ticket",
    },
    {
      text: "Riwayat Transaksi",
      icon: <FaExchangeAlt className="w-5 h-5" />,
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
      {/* Logo */}
      <div className="p-4 mb-8 flex justify-center">
        <Link to="/">
          <img src={logo} alt="GoEvent Logo" className="w-32" />
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 text-lg transition-colors
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
