// import { Link } from "react-router-dom";
import { Table } from "../../../components/Layout/Table"

export const DataUser = () => {

    const columns = [
        { key: 'no', label: 'No' },
        { key: 'name', label: 'Username' },
        { key: 'status', label: 'Email' },
        { key: 'tiket', label: 'Organizer' },
        { key: 'jumlah', label: 'Jumlah Tiket' },
    ];

    const data = [
        { no: 1, name: 'Festival Musik', status: 25, jumlah: 3, tiket: "Himakom"}
    ];

return (
    <div>
        <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black">User Management</h1>
        <div className="card shadow-lg border-gray-300">
            <Table columns={columns} data={data} />
        </div>

    </div>
)
}
