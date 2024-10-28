import { Link } from "react-router-dom"
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { TambahOrganizer } from "./TambahOrganizer";
import { Table } from "../../../components/Table";


export const Organizer = () => {

  const columns = [
    { key: 'no', label: 'No' },
    { key: 'name', label: 'Nama Organizer' },
    { key: 'event', label: 'Nama Event' },
    { key: 'status', label: 'Status' },
    { key: 'kategori', label: 'Kategori' },
    { key: 'aksi', label: 'Aksi' },
  ];

  const data = [
    {
      no: 1, name: 'Festival Musik', event: 'Festival  Bandung', status: 'active', kategori: 'musik - coldplay',
      aksi: <div className="flex flex-row gap-2 ">
        <Link className="btn bg-red-400 border-0 text-white shadow-md hover:bg-red-500" to="/delete"> <RiDeleteBin5Line size={20} /> </Link>
        <Link className="btn  bg-primary border-0 text-white shadow-md hover:bg-blue-950" to="/admin/organizer/detail"> <GoNote size={20} /> </Link>
      </div>,
    }
  ];

  return (
    <div className="">
      <h1 className="mb-5 text-2xl font-extrabold text-black text-shadow">Organizer</h1>
      <div className="flex justify-end">
        <TambahOrganizer />
      </div>
      <div className="card shadow-md border border-gray-200 flex-grow">
        <div className="overflow-x-auto">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}