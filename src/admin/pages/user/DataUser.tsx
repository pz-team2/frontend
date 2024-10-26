// import { Link } from "react-router-dom";
import { Table } from "../../../components/Table"

export const DataUser = () => {

    const columns = [
        { key: 'no', label: 'No' },
        { key: 'name', label: 'Username' },
        { key: 'status', label: 'Email' },
        { key: 'jumlah', label: 'Jumlah Tiket' },
        { key: 'tiket', label: 'Tiket Terjual' }
    ];

    const data = [
        { no: 1, name: 'Festival Musik', status: 25, jumlah: 3, tiket: 100}
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
