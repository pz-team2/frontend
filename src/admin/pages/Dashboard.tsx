import { VscOrganization } from "react-icons/vsc";
import { MdEventNote } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import Card from "../../components/Layout/Card";
import { Table } from "../../components/Layout/Table";
import gambar from '../../assets/img/banner1.png'
import { Link } from "react-router-dom";


export const Dashboard = () => {

  const columns = [
    { key: 'gambar', label: 'gambar' },
    { key: 'name', label: 'Nama Organizer' },
    { key: 'tanggal', label: 'Tanggal Event' },
    { key: 'tiket', label: 'Tiket Terjual' },
    { key: 'status', label: 'Status' },
  ];

  const data = [
    {
      name: 'Festival Musik', tanggal: '21 Maret 2024', tiket: '100 Tiket',
      gambar: <div> <img src={gambar} alt="" className="w-20 rounded-lg" /></div>,
      status: <div className=" bg-red-300 text-center rounded-xl text-white"> active </div>,
    },
    {
      name: 'Festival Musik', tanggal: '21 Maret 2024', tiket: '100 Tiket',
      gambar: <div> <img src={gambar} alt="" className="w-20 rounded-lg" /></div>,
      status: <div className=" bg-red-300 text-center rounded-xl text-white"> active </div>,
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <h1 className="mb-5 text-xl md:text-2xl font-extrabold text-black">Welcome To Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-11">
        <Card title={"Organizer"} jumlah={'3'} icons={<VscOrganization />} />
        <Card title={"Event"} jumlah={'3'} icons={<MdEventNote />} />
        <Card title={"User"} jumlah={'3'} icons={<FaUser />} />
      </div>
      {/* Table */}
      <h1 className="mb-5 mt-8 md:mt-14 text-xl md:text-2xl font-extrabold text-black">Event Statistics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 md:gap-9">
        <div className="card shadow-md border border-gray-400 w-full overflow-hidden">
          <div className="flex justify-end mr-5">
            <Link to='/admin/organizer' className="text-center bg-primary w-28 mt-3 text-white rounded-badge p-1"> View All </Link>
          </div>
          <Table columns={columns} data={data} />
        </div>

        {/* Latest Events Card */}
        <div className="card w-full lg:w-96 shadow-md p-4 md:p-6">
          <h4 className="text-center text-black font-semibold text-base md:text-lg mb-3">Event Latest</h4>
          <ol className="list-decimal  text-black text-sm md:text-base space-y-2">
            <li className="card bg-slate-100 p-3">
              1. Karnaval Festival</li>
            <li className="card bg-slate-100 p-3"> 2. Karnaval Festival</li>
            <li className="card bg-slate-100 p-3"> 3. Karnaval Festival</li>
          </ol>
          <div className="flex justify-end mr-5">
            <Link to='/admin/organizer' className="text-center   mt-3 text-gray-500 rounded-badge p-1"> Selengkap nya ... </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;