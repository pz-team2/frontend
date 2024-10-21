import { VscOrganization } from "react-icons/vsc";
import { MdEventNote } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

export const Layout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto p-4 lg:p-24 md:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <h1 className="mb-5 text-xl md:text-2xl font-extrabold text-black">Welcome To Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-11">
        {/* Organizer Card */}
        <div className="card bg-custom-secondary text-white w-full shadow-md">
          <div className="card-body flex flex-row justify-between items-center p-4 md:p-6">
            <div>
              <h2 className="card-title text-2xl md:text-3xl">30</h2>
              <h3 className="text-base md:text-lg mt-1">Organizer</h3>
            </div>
            <div className="flex items-center">
              <VscOrganization className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </div>

        {/* Event Card */}
        <div className="card bg-custom-secondary text-white w-full shadow-md">
          <div className="card-body flex flex-row justify-between items-center p-4 md:p-6">
            <div>
              <h2 className="card-title text-2xl md:text-3xl">30</h2>
              <h3 className="text-base md:text-lg mt-1">Event</h3>
            </div>
            <div className="flex items-center">
              <MdEventNote className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </div>

        {/* User Card */}
        <div className="card bg-custom-secondary text-white w-full shadow-md">
          <div className="card-body flex flex-row justify-between items-center p-4 md:p-6">
            <div>
              <h2 className="card-title text-2xl md:text-3xl">30</h2>
              <h3 className="text-base md:text-lg mt-1">User</h3>
            </div>
            <div className="flex items-center">
              <FaUser className="w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <h1 className="mb-5 mt-8 md:mt-14 text-xl md:text-2xl font-extrabold text-black">Event Statistics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 md:gap-9">
        {/* Table Card */}
        <div className="card shadow-md border border-gray-400 w-full overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table w-full text-black">
              <thead className="text-black">
                <tr className="border-gray-300">
                  <th className="text-sm md:text-base p-2 md:p-4">No</th>
                  <th className="text-sm md:text-base p-2 md:p-4">Nama Event</th>
                  <th className="text-sm md:text-base p-2 md:p-4">Organizer</th>
                  <th className="text-sm md:text-base p-2 md:p-4">Tanggal</th>
                  <th className="text-sm md:text-base p-2 md:p-4">Tiket Terjual</th>
                </tr>
              </thead>
              <tbody className="border-gray-300">
                <tr className="border-gray-300">
                  <th className="text-sm md:text-base p-2 md:p-4">1</th>
                  <td className="text-sm md:text-base p-2 md:p-4">Cy Ganderton</td>
                  <td className="text-sm md:text-base p-2 md:p-4">Quality Control Specialist</td>
                  <td className="text-sm md:text-base p-2 md:p-4">Blue</td>
                  <td className="text-sm md:text-base p-2 md:p-4">150</td>
                </tr>
                <tr className="border-gray-300">
                  <th className="text-sm md:text-base p-2 md:p-4">2</th>
                  <td className="text-sm md:text-base p-2 md:p-4">Hart Hagerty</td>
                  <td className="text-sm md:text-base p-2 md:p-4">Desktop Support Technician</td>
                  <td className="text-sm md:text-base p-2 md:p-4">Purple</td>
                  <td className="text-sm md:text-base p-2 md:p-4">120</td>
                </tr>
                <tr className="border-gray-300">
                  <th className="text-sm md:text-base p-2 md:p-4">3</th>
                  <td className="text-sm md:text-base p-2 md:p-4">Brice Swyre</td>
                  <td className="text-sm md:text-base p-2 md:p-4">Tax Accountant</td>
                  <td className="text-sm md:text-base p-2 md:p-4">Red</td>
                  <td className="text-sm md:text-base p-2 md:p-4">90</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Latest Events Card */}
        <div className="card w-full lg:w-96 shadow-md p-4 md:p-6">
          <h4 className="text-center text-black font-semibold text-base md:text-lg mb-3">Event Latest</h4>
          <ol className="list-decimal ml-5 text-black text-sm md:text-base space-y-2">
            <li>Karnaval Festival</li>
            <li>Karnaval Music</li>
            <li>Karnaval Seminar</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;