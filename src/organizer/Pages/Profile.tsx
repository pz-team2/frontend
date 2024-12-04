import { useEffect, useState } from 'react';
import { FaUsersCog } from "react-icons/fa";
import UpdateProfile from './UpdateProfile';
import { UpdatePassword } from './UpdatePassword';
import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import profilegambar from "../../assets/img/3.png";
import api from '../../services/api';
export const Profile = () => {
    // State untuk melacak bagian yang aktif
    const [activeTab, setActiveTab] = useState('profile'); // 'profile' atau 'password'
    const [profile, setProfile] = useState<any>({})

    const fetchData = async() => {
        try {
            const response = await api.get('organizers/profile')
            setProfile(response.data.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 md:gap-9">

                {/* Latest Events Card (kiri kecil) */}
                <div className="w-full lg:w-80  ">
                    <div className="grid grid-cols-1 ">
                        <div className="card shadow-lg p-4 md:p-6 text-center">
                            <h1 className="text-2xl font-extrabold text-black mt-4">Profile Data</h1>
                            <div className="flex justify-center">
                                <img src={profilegambar} alt="" className="w-28" />
                            </div>
                            <p className="text-md font-semibold text-gray-900 text-center mt-4">
                                {profile.organizerName || "Loading..."}
                            </p>
                            <p className="text-sm text-center"> admin organizer</p>
                            <div className="flex justify-center mt-3">
                                <p className={`text-sm text-center ${profile.status === "Aktif" ? "bg-secondary" : "bg-red-400"} text-white p-2 rounded-full w-44 inline-flex justify-center items-center`}>
                                    <span>{profile.status}</span>
                                </p>
                            </div>
                        </div>
                        <div className="card shadow-lg p-4 md:p-6">
                            <h1 className="flex items-center text-black text-lg font-bold mt-3">
                                <FaUsersCog size={30} className="mr-3" />
                                Profile
                            </h1>
                            <hr className="border-t-2 border-gray-300 my-4 mt-1" />
                            <div className="">
                                <ul className="">
                                    <li className='mb-4 mt-2 flex items-center'>
                                        <a
                                            href="#update-profile"
                                            className={`text-black text-md font-semibold flex items-center gap-4  ${activeTab === 'profile' ? 'bg-secondary p-3 rounded-3xl text-white' : ''} `}
                                            onClick={() => setActiveTab('profile')}
                                        >
                                            <FaUserEdit size={25} /> Profile Data Organizer
                                        </a>
                                    </li>
                                    <hr className="border-t-2 border-gray-300 my-4 mt-1" />
                                    <li className='mt-5'>
                                        <a
                                            href="#update-password"
                                            className={`text-black text-md font-semibold flex items-center gap-4 ${activeTab === 'password' ? 'bg-secondary p-3 rounded-3xl text-white' : ''} `}
                                            onClick={() => setActiveTab('password')}
                                        >
                                            <RiLockPasswordFill size={25} /> Update Password
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="card shadow-md borde w-full overflow-hidden p-3">
                    {/* Conditional Render: Update Profile Form */}
                    {activeTab === 'profile' && (
                        <UpdateProfile />
                    )}

                    {/* Conditional Render: Update Password Form */}
                    {activeTab === 'password' && (
                        <UpdatePassword />
                    )}
                </div>
            </div>

        </div>
    );
};
