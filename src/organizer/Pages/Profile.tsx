
export const Profile = () => {
    return (
        <div>
            <h1 className="mb-5 text-2xl font-extrabold text-black">Profile Organizer</h1>
            <div className="card bg-white shadow-lg p-6 md:p-9">
                <table className="table-auto text-left w-full md:w-auto lg:w-96">
                    <tbody className="font-semibold text-black">
                        <tr>
                            <th className="py-2">Username</th>
                            <td className="px-2">:</td>
                            <td className="font-medium py-2">Fauzan</td>
                        </tr>
                        <tr>
                            <th className="font-semibold text-black py-2">Email</th>
                            <td className="px-2">:</td>
                            <td className="font-medium py-2">Fauzan@gmail.com</td>
                        </tr>
                        <tr>
                            <th className="font-semibold text-black py-2">Nama Organizer</th>
                            <td className="px-2">:</td>
                            <td className="font-medium py-2">Fauziono</td>
                        </tr>
                        <tr>
                            <th className="font-semibold text-black py-2">No-Telephone</th>
                            <td className="px-2">:</td>
                            <td className="font-medium py-2">0835787533</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
