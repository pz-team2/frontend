import { useState, useEffect } from "react";
import { Table } from "../../../components/Layout/Table";
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
        { key: 'no', label: 'No' },
        { key: 'username', label: 'Username' },
        { key: 'name', label: 'Nama' },
        { key: 'email', label: 'Email' },
        { key: 'gender', label: 'Jenis Kelamin' },
        { key: 'phoneNumber', label: 'Nomer Handphone' },
        { key: 'alamat', label: 'Alamat' },
    ];

    if (loading) {
        return <div>Loading...</div>;
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

    return (
        <div>
            <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black">User Management</h1>
            <div className="card shadow-lg border-gray-300">
                <Table columns={columns} data={rows} />
            </div>
        </div>
    );
};

