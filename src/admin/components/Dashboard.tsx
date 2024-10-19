
import { VscOrganization } from "react-icons/vsc";
import { MdEventNote } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

export const Dashboard = () => {
  return (
    <div className="">
      <h1 className="mb-5 text-2xl font-extrabold text-black">Welcome To Dashboard</h1>
      <div className="grid grid-cols-1 gap-11 md:grid-cols-1 lg:grid-cols-3">
        <div className="card bg-custom-secondary  text-white w-full shadow-md">
          <div className="card-body flex flex-row justify-between items-center ">
            <div>
              <h2 className="card-title text-3xl">30</h2>
              <h3 className="text-lg mt-1">Organizer</h3>
            </div>
            <div >
              <VscOrganization size={42} />
            </div>
          </div>
        </div>
        <div className="card bg-custom-secondary  text-white w-full shadow-md">
          <div className="card-body flex flex-row justify-between items-center ">
            <div>
              <h2 className="card-title text-3xl">30</h2>
              <h3 className="text-lg mt-1">Event</h3>
            </div>
            <div >
              <MdEventNote size={42} />
            </div>
          </div>
        </div>
        <div className="card bg-custom-secondary  text-white w-full shadow-md">
          <div className="card-body flex flex-row justify-between items-center ">
            <div>
              <h2 className="card-title text-3xl">30</h2>
              <h3 className="text-lg mt-1">User</h3>
            </div>
            <div >
              <FaUser size={42} />
            </div>
          </div>
        </div>
      </div>
      <h1 className="mb-5 mt-14 text-2xl font-extrabold text-black">Welcome To Dashboard</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-[1fr_auto] sm:grid-cols-1 md:grid-cols-1 gap-9">
        <div className="card shadow-md border border-gray-400 flex-grow">
          <div className="overflow-x-auto">
            <table className="table text-black">
              {/* head */}
              <thead className="text-black">
                <tr className="border-gray-300">
                  <th> No </th>
                  <th> Nama Event </th>
                  <th> Organizer </th>
                  <th> Tanggal </th>
                  <th> Tiket Terjual </th>
                </tr>
              </thead>
              <tbody className="border-gray-300">
                {/* row 1 */}
                <tr className="border-gray-300">
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr className="border-gray-300">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr className="border-gray-300">
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card w-full md:w-auto shadow-md p-6 lg:w-96">
          <h4 className="text-center text-black font-semibold mb-3"> Event Latest </h4>
          <ol className="list-decimal ml-5 text-black">
            <li>Karnaval Festival</li>
            <li>Karnaval Music</li>
            <li>Karnaval Seminar</li>
          </ol>
        </div>

      </div>
    </div>

  )
}
