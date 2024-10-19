// import Sidebar from "../Sidebar"

import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

const DetailOragnizer = () => {
  return (
    <>
      <div>
        <h1 className="mb-5 text-2xl font-extrabold text-black"> Detail Organizer</h1>
        <div className="card bg-white shadow-lg p-9">
          <table className="table-auto  text-left  md:w-auto lg:w-96">
            <tbody className="font-semibold text-black">
              <tr >
                <th className="py-2">Username</th>
                <td className="px-2 ">:</td>
                <td className="font-medium py-2 "> Fauzan </td>
              </tr>
              <tr>
                <th className="font-semibold text-black py-2">Email</th>
                <td className="px-2">:</td>
                <td className="font-medium py-2"> Fauzan@gmail.com </td>
              </tr>
              <tr>
                <th className="font-semibold text-black py-2">Nama Organizer</th>
                <td className="px-2">:</td>
                <td className="font-medium py-2"> Fauziono </td>
              </tr>
              <tr>
                <th className="font-semibold text-black py-2">No-Telephone</th>
                <td className="px-2">:</td>
                <td className="font-medium py-2">0835787533</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex mt-5 gap-5">
          <Link to='' className=" btn border-0 text-white hover:bg-green-300" style={{ backgroundColor: '#2EB2C2' }}> <FaCirclePlus /> Tambah Event </Link>
          <div className="relative w-96">
            <input type="text" placeholder="Masukkan Username" className="input w-full rounded-3xl bg-white border-gray-400 pl-5 pr-16"/>
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2" style={{borderRadius: '50%'}}>
              <IoSearchSharp />
            </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default DetailOragnizer