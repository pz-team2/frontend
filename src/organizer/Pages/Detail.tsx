
import gambar from '../../assets/img/banner1.png';
import { IoIosCalendar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidUserRectangle } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import Card from "../../components/Card"
import { FaMoneyBillWave } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdConfirmationNumber } from "react-icons/md";

export const Detail = () => {
    return (
        <div>
            <Link to='/organizer/event' className='text-black '> <IoChevronBackOutline size={24} /> </Link>
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-11 gap-11">
                        <Card title={'Penghasilan'} jumlah={'Rp. 30.000'} icons={<FaMoneyBillWave size={40} />} />
                        <Card title={'Transaksi'} jumlah={'30'} icons={<AiOutlineTransaction />} />
                        <Card title={'Tiket Terjual'} jumlah={'30'} icons={<MdConfirmationNumber />} />
                    </div>
                </div>
            </div>
        </div>
    )
}
