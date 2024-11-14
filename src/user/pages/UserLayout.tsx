import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const UserLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#12496E] text-white rounded-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 fixed md:sticky top-0 h-screen overflow-y-auto z-40`}
      >
        <UserSidebar onClose={() => setIsSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 md:ml-0">
        <div className="md:mt-0 mt-16">
          <Outlet />
        </div>
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default UserLayout;