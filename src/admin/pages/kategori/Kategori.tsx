
import { Table } from "../../../components/Layout/Table"
import { Link } from "react-router-dom";
import { TambahKategori } from "./TambahKategori";
import { FaTrashCan } from "react-icons/fa6";

const columns = [
  { key: 'no', label: 'No' },
  { key: 'name', label: 'Judul' },
  { key: 'keterangan', label: 'Keterangan' },
  { key: 'aksi', label: 'Aksi' },
];

const data = [
  {
    no: 1, name: 'Festival Musik', keterangan: 'Cosplay',
    aksi: <div className="flex flex-row gap-2 ">
      <Link to='/' className="btn bg-red-400 text-white border-0 hover:bg-red-500"><FaTrashCan /></Link>
    </div>,
  },
  {
    no: 2, name: 'Festival Musik', keterangan: 'Cosplay',
    aksi: <div className="flex flex-row gap-2 ">
      <Link to='/' className="btn bg-red-400 text-white border-0 hover:bg-red-500"><FaTrashCan /></Link>
    </div>,
  },
  {
    no: 3, name: 'Festival Musik', keterangan: 'Cosplay',
    aksi: <div className="flex flex-row gap-2 ">
      <Link to='/' className="btn bg-red-400 text-white border-0 hover:bg-red-500"><FaTrashCan /></Link>
    </div>,
  },
];

export const Kategori = () => {
  return (
    <div>
      <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black">Setting Kategori</h1>
      <div>
      </div>
      <div className="card shadow-lg p-5 border border-gray-200 will-change-scroll flex justify-center">
        <TambahKategori />
        <div className="card border border-gray-200 mt-4">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}
