import { useState, useEffect } from "react";
import DataTable from 'react-data-table-component'; // import DataTable component
import api from "../../../services/api";

export const DataUser = () => {
    const [getUser, setDataUser] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            const response = await api.get('users/');
            setDataUser(response.data.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const columns = [
        { name: 'No', selector: (row: any) => row.no, sortable: true },
        { name: 'Username', selector: (row: any) => row.username, sortable: true },
        { name: 'Nama', selector: (row: any) => row.name, sortable: true },
        { name: 'Email', selector: (row: any) => row.email, sortable: true },
        { name: 'Gender', selector: (row: any) => row.gender, sortable: true },
        { name: 'Nomer Handphone', selector: (row: any) => row.phoneNumber, sortable: true },
        { name: 'Alamat', selector: (row: any) => row.alamat, sortable: true },
    ];

    if (loading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    const rows = getUser.map((item, index) => ({
        no: index + 1,
        username: item.username,
        name: item.fullName,
        email: item.email,
        alamat: item.city,
        gender: item.gender,
        phoneNumber: item.phoneNumber,
    }));

    // Custom styles untuk DataTable, tapi menggunakan Tailwind untuk lebih banyak styling
    const customStyles = {
        rows: {
            style: {
                fontSize: '14px',
                padding: '10px',
            },
        },
        headCells: {
            style: {
                backgroundColor: '#f4f4f4',
                fontWeight: 'bold',
                color: '#333',
                fontSize: '16px',
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                color: '#333',
            },
        },
        pagination: {
            style: {
                color: '#000',
                fontSize: '14px',
            },
        },
    };

    return (
        <div className="container mx-auto px-4 py-5">
            <h1 className="text-2xl font-extrabold text-black mb-5">User Management</h1>

            {/* Tabel menggunakan DataTable */}
            <div className="card shadow-lg border-gray-300 p-4">
                <DataTable
                    title="User List"
                    columns={columns}
                    data={rows}
                    pagination
                    paginationPerPage={10} // Menampilkan 10 baris per halaman
                    paginationRowsPerPageOptions={[5, 10, 15, 20]} // Opsi jumlah baris per halaman
                    highlightOnHover
                    responsive
                    customStyles={customStyles} // Menggunakan customStyles
                    // Styling menggunakan Tailwind CSS
                    className="shadow-lg rounded-lg overflow-hidden"
                    noHeader={false} // Menonaktifkan header tabel default jika diperlukan
                    fixedHeader
                />
            </div>
        </div>
    );
};
