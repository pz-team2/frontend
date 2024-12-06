import { Link } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import React from "react";
const DetailOragnizer = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="mb-5 text-2xl font-extrabold text-black">Detail Organizer</h1>

        <div className="card bg-white shadow-lg p-9 w-full max-w-full">
          <div className="overflow-x-auto w-full">
            <table className="table-auto lg:w-96 text-left">
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
        </div>
        <div className="flex flex-wrap mt-5 gap-5">
          <Link to='' className="btn border-0 text-white hover:bg-green-300" style={{ backgroundColor: '#2EB2C2' }}>
            <FaCirclePlus /> Tambah Event
          </Link>
          <div className="relative w-full max-w-sm">
            <input type="text" placeholder="Masukkan Username" className="input w-full rounded-3xl bg-white border-gray-400 pl-5 pr-16 focus:border-blue-950" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-950 hover:bg-blue-950 text-white p-2" style={{ borderRadius: '50%' }}>
              <IoSearchSharp size={17} />
            </button>
          </div>
        </div>
        <h1 className="mt-6 mb-5 text-2xl font-extrabold text-black">Event</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-3 ">
          <div className="card card-side bg-white shadow-xl rounded-2xl ">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie" className="rounded-s-2xl w-36" />
            <div className="card-body">
              <h2 className="card-title text-black">Konser Festival</h2>
              <p>31 Desember 2024</p>
              <div className="card-actions justify-end flex flex-row">
                <Link to='/' className="btn border-0 text-white" style={{ backgroundColor: '#2EB2C2' }}> Detail</Link>
                <Link to='/' className="btn border-0 text-white" style={{ backgroundColor: '#2EB2C2' }}> Update</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default DetailOragnizer;
