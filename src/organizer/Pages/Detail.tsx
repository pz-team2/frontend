import gambar from '../../assets/img/banner1.png';
import { IoIosCalendar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidUserRectangle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import { MdPriceChange } from "react-icons/md";
import { FaWindowMaximize } from "react-icons/fa6";

export const Detail = () => {
    return (
        <div>
            <Link to='/organizer/event' className='text-black flex items-center gap-2 mb-5'>
                <IoChevronBackOutline size={24} />
                <span>Back to Events</span>
            </Link>

            <h1 className="text-3xl font-extrabold mb-8 text-gray-900">Detail Organizer - By Fauzio</h1>

            <div className="border border-gray-300 rounded-lg p-8 bg-white shadow-lg">
                <div className="badge bg-primary p-5 mb-4 text-white"> Music </div>
                <div className="badge bg-cyan-200 border-0 text-black p-5 ml-3"> Active </div>
                <div className='relative flex flex-col lg:flex-row gap-6'>
                    <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-md">
                        <img src={gambar} alt="Event Banner" className='w-full h-full object-cover' />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            <div className="bg-secondary p-4 text-center shadow-md rounded-lg">
                                <h1 className='text-xl text-white'>Rp. 30.000</h1>
                                <h2 className="text-sm font-bold text-white">Penghasilan</h2>
                            </div>
                            <div className="bg-secondary p-4 text-center shadow-md rounded-lg">
                                <h1 className='text-xl text-white'>40</h1>
                                <h2 className="text-sm font-bold text-white">Transaksi</h2>
                            </div>
                            <div className="bg-secondary p-4 text-center shadow-md rounded-lg">
                                <h1 className='text-xl text-white'>30</h1>
                                <h2 className="text-sm font-bold text-white">Tiket Tersisa</h2>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                            <h1 className='text-center text-black font-bold text-lg'> Festival  Musik </h1>
                            <h5 className="text-md font-medium mb-4 text-gray-800">Informasi Event : </h5>
                            <div className="grid gap-4 text-gray-700 font-medium">
                                <div className="flex items-center gap-2">
                                    <IoIosCalendar  />
                                    <h6>Tanggal: 15 Desember 2024, 15.00</h6>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLocationDot  />
                                    <h6>Location: Banjar Baru</h6>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BiSolidUserRectangle  />
                                    <h6>Organizer: Himacom</h6>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdPriceChange/>
                                    <h6>Harga: Rp. 30.000</h6>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaWindowMaximize/>
                                    <h6>Kuota: 100 Tiket</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-8 text-gray-800'>
                    <h1 className='font-bold text-xl tracking-wide'>Deskripsi</h1>
                    <h2 className='font-medium text-md mt-3'>Konsep Cosmyc Fest</h2>
                    <p className='mt-3'>MWE (Imagene Week of Himakom) merupakan rangkaian acara tahunan yang diadakan oleh Program Studi Ilmu Komputer Universitas Lambung Mangkurat (ULM) dalam rangka memperingati HUT HIMAKOM.</p>
                    <p className='mt-3'>Tema dari kegiatan ini adalah "Navigating Through The Stars in COSMYC Voyage" dengan acara puncak COSMYC FEST yang terdiri dari festival musik dan bazaar dengan berbagai tenant untuk pengunjung.</p>
                    <p className='mt-3'>Pastikan untuk tidak melewatkan tiket Early Bird yang akan dibuka pada tanggal 1 Agustus 2024, pukul 20.00 WITA.</p>
                    <h3 className='mt-3 font-semibold'>Event diselenggarakan pada:</h3>
                    <ul className='list-disc list-inside mt-2'>
                        <li><strong>Lokasi:</strong> Banjar Baru</li>
                        <li><strong>Tanggal:</strong> 15-16 Desember 2024</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
