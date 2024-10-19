import { Link } from "react-router-dom"
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { FaCirclePlus } from "react-icons/fa6";



export const Organizer = () => {
  return (
    <div className="">
      <h1 className="mb-5 text-2xl font-extrabold text-black">Organizer</h1>
      <div className="flex justify-end">
        <button className="btn bg-custom-primary mb-4 border-0 text-white" style={{ backgroundColor: '#2EB2C2' }} onClick={() => { const modal = document.getElementById('my_modal_1') as HTMLDialogElement; if (modal) { modal.showModal(); } }}><FaCirclePlus /> Tambah Event</button>
      </div>
      <div className="card shadow-md border border-gray-200 flex-grow">
        <div className="overflow-x-auto">
          <table className="table text-black">
            {/* head */}
            <thead className="text-black text-center">
              <tr className="border-gray-300">
                <th> No </th>
                <th> User </th>
                <th> Email </th>
                <th> Location </th>
                <th> Status </th>
                <th> Aksi </th>
              </tr>
            </thead>
            <tbody className="border-gray-300">
              {/* row 1 */}
              <tr className="border-gray-300">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td className="flex gap-3 justify-center">
                  <Link className="btn bg-red-400 border-0 text-white shadow-md hover:bg-red-500" to="/delete"> <RiDeleteBin5Line size={20} /> </Link>
                  <Link className="btn  bg-blue-400 border-0 text-white shadow-md hover:bg-blue-500" to="/detail"> <GoNote size={20} /> </Link>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="border-gray-300">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>Purple</td>
                <td className="flex gap-3 justify-center">
                <Link className="btn bg-red-400 border-0 text-white shadow-md hover:bg-red-500" to="/delete"> <RiDeleteBin5Line size={20} /> </Link>
                <Link className="btn  bg-blue-400 border-0 text-white shadow-md hover:bg-blue-500" to="/detail"> <GoNote size={20} /> </Link>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="border-gray-300">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Red</td>
                <td className="flex gap-3 justify-center">
                <Link className="btn bg-red-400 border-0 text-white shadow-md hover:bg-red-500" to="/delete"> <RiDeleteBin5Line size={20} /> </Link>
                <Link className="btn  bg-blue-400 border-0 text-white shadow-md hover:bg-blue-500" to="/detail"> <GoNote size={20} /> </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-lg text-black"> Tambah Data</h3>
          <div className="card">
            <span className="text-black mt-3 mb-2">Username</span>
            <input type="text" placeholder="Masukan Username" className="input input-bordered w-full  bg-white border-gray-400" />
            <span className="text-black mt-3 mb-2">Email</span>
            <input type="text" placeholder="Masukan Email" className="input input-bordered w-full bg-white border-gray-400" />
            <span className="text-black mt-3 mb-2">Nama Organizer</span>
            <input type="text" placeholder="Masukan Password" className="input input-bordered w-full bg-white border-gray-400" />
            <span className="text-black mt-3 mb-2">Password</span>
            <input type="text" placeholder="Masukan Password" className="input input-bordered w-full bg-white border-gray-400" />
          </div>
          <div className="modal-action">
            <button className="btn btn-custom-secondary text-white" onClick={() => {
              const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
              if (modal) {
                modal.close();
              }
            }}>Close</button>
          </div>
        </div>
      </dialog>

    </div>
  )
}
