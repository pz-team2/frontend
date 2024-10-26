import { VscOrganization } from "react-icons/vsc";
import { MdEventNote } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import Card from "../../components/Card";
import { Table } from "../../components/Table";

export const Dashboard = () => {

  const columns = [
    { key: 'name', label: 'Nama Organizer' },
    { key: 'status', label: 'Status' },
    { key: 'tanggal', label: 'Tanggal Event' },
    { key: 'tiket', label: 'Tiket Terjual' },
  ];

  const data = [
    { name: 'Festival Musik', status: 25, tanggal: 'john@example.com',  tiket: 100 },
    { name: 'Festival Musik', status: 25, tanggal: 'john@example.com',  tiket: 100 },
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
          <Table columns={columns} data={data} />
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