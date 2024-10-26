import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { Search } from "../../../components/Search";


const DetailOrganizer = () => {
  return (
    <>
      <div>
        <h1 className="mb-5 text-2xl font-extrabold text-black">Detail Organizer</h1>
        <div className="card bg-white shadow-lg p-6 md:p-9">
          <table className="table-auto text-left w-full md:w-auto lg:w-96">
            <tbody className="font-semibold text-black">
              <tr>
                <th className="py-2">Username</th>
                <td className="px-2">:</td>
                <td className="font-medium py-2">Fauzan</td>
              </tr>
              <tr>
                <th className="font-semibold text-black py-2">Email</th>
                <td className="px-2">:</td>
                <td className="font-medium py-2">Fauzan@gmail.com</td>
              </tr>
              <tr>
                <th className="font-semibold text-black py-2">Nama Organizer</th>
                <td className="px-2">:</td>
                <td className="font-medium py-2">Fauziono</td>
              </tr>
              <tr>
                <th className="font-semibold text-black py-2">No-Telephone</th>
                <td className="px-2">:</td>
                <td className="font-medium py-2">0835787533</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row mt-5 gap-3 sm:gap-5">
          <Link to="/admin/organizer/event/tambah" className="btn border-0 text-white hover:bg-green-300" style={{ backgroundColor: '#2EB2C2' }}>
            <FaCirclePlus /> Tambah Event
          </Link>
          <div className="relative w-full sm:w-96">
            <Search />
          </div>
        </div>

        <h1 className="mt-6 mb-5 text-2xl font-extrabold text-black">Event</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="card card-side flex-col bg-white shadow-xl rounded-2xl sm:flex-col lg:flex-row md:flex-row">
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Event" className="w-max-full lg:w-36 md:w-36 24 rounded-m-2xl md:rounded-s-2xl" />
            <div className="card-body">
              <h2 className="card-title text-black text-md">Konser Festival</h2>
              <p className="text-sm">31 Desember 2024</p>
              <div className="card-actions justify-start flex flex-row">
                <Link to='/admin/organizer/event/detail' className="p-2 rounded-lg border-0 text-white bg-secondary hover:bg-cyan-700 font-medium">Detail</Link>
                <Link to='/admin/organizer/event/update' className="p-2 border-0 rounded-lg text-white bg-secondary hover:bg-cyan-700 font-medium">Update</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailOrganizer;
