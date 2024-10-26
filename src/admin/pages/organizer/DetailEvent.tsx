
import gambar from '../../../assets/img/banner1.png';
import { IoIosCalendar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidUserRectangle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";

export const DetailEvent = () => {
    return (
        <div>
            <Link to='/admin/organizer/detail' className='text-black '> <IoChevronBackOutline  size={24}/> </Link>
            <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black">Detail Organizer - By Fauzio</h1>
            <div className="card shadow-xl p-6">
                <div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
                    <div className="image">
                        <img src={gambar} alt="" className='rounded-lg' />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-black text-2xl">Konser Festival</h5>
                        <div className="flex flex-row gap-4 text-black mt-4">
                            <IoIosCalendar size={23} />
                            <h6>Start : 15 Desember 2024 15.00</h6>
                        </div>
                        <div className="flex flex-row gap-4 text-black mt-3">
                            <FaLocationDot size={23} />
                            <h6>Location : Banjar Baru</h6>
                        </div>
                        <div className="flex flex-row gap-4 text-black mt-3">
                            <BiSolidUserRectangle size={23} />
                            <h6>By : Himacom</h6>
                        </div>
                    </div>
                </div>
                <div className='mt-4 text-black'>
                    <h1 className='text-black font-bold text-xl tracking-wider'>Deskripsi</h1>
                    <h2 className='font-medium text-md mt-3 text-black'>Konsep Cosmyc  Fest</h2>
                    <p className='mt-3'>MWE (Imagene Week of Himakom) merupakan rangkaian acara tahunan yang diadakan oleh Program Studi Ilmu
                        Komputer Universitas Lambung Mangkurat (ULM) dalam rangka memperingati HUT HIMAKOM.</p>
                    <p className='mt-3'>Tema dari kegiatan ini adalah "Navigating Through The Stars in COSMYC Voyage" dengan nama acara puncak  COSMYC FEST.
                        Acara festival musik dan bazaar yang menyediakan tenant - tenant untuk pengunjung</p>
                    <p className='mt-3'>Untuk itu, jangan sampai kelewatan war tiket Early Bird yang akan dibuka ditanggal :  1 Agustus 2024, pukul 20.00 WITA</p>
                    <h3 className='mt-3'>Eventnya sendiri akan diselenggarakan pada :</h3>
                    <ul>
                        <li>Lokasi : Banjar Baru</li>
                        <li>Tanggal : 2024</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
