
interface profileProps {
    username: string;
    email: string;
    namaOrganizer: string;
    no:string;
}

export const CardProfile:React.FC<profileProps> = ({username, email,  namaOrganizer, no}) => {

    return (
        <div>
            <div className="card bg-slate-100 shadow-lg p-6 md:p-9">
                <table className="table-auto text-left w-full md:w-auto lg:w-96">
                    <tbody className="font-semibold text-black">
                        <tr>
                            <th className="py-2">Username</th>
                            <td className="px-2">:</td>
                            <td className="font-medium py-2">{username}</td>
                        </tr>
                        <tr>
                            <th className="font-semibold text-black py-2">Email</th>
                            <td className="px-2">:</td>
                            <td className="font-medium py-2">{email}</td>
                        </tr>
                        <tr>
                            <th className="font-semibold text-black py-2">Nama Organizer</th>
                            <td className="px-2">:</td>
                            <td className="font-medium py-2">{namaOrganizer}o</td>
                        </tr>
                        <tr>
                            <th className="font-semibold text-black py-2">No-Telephone</th>
                            <td className="px-2">:</td>
                            <td className="font-medium py-2">{no}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
