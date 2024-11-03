import Card from "../../components/Layout/Card"
import { FaMoneyBillWave } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdConfirmationNumber } from "react-icons/md";
import Diagram from "./Diagram";
import profile from '../../assets/img/3.png'
import gambar from '../../assets/img/banner1.png'
import { Link } from "react-router-dom";


export const DashboardOrganizer = () => {
    return (
        <div>
            <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black" > Welcome To Dashboard  ✋</h1>
            <div className=" flex flex-col lg:flex-row md:grid-cols-1 sm:flex-col gap-11">
                <div className="flex-grow card rounded-xl shadow-lg bg-slate-100 p-5">
                    <h1 className="mb-4 text-xl font-extrabold mt-4 text-black" > Hello, Festival Bandung </h1>
                    <p>Yuk, Lihat Data Event Kamu </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-11 gap-11 mt-5">
                        <Card title={'Penghasilan'} jumlah={'Rp. 30.000'} icons={<FaMoneyBillWave />} />
                        <Card title={'Transaksi'} jumlah={'30'} icons={<AiOutlineTransaction />} />
                        <Card title={'Tiket Terjual'} jumlah={'30'} icons={<MdConfirmationNumber />} />
                    </div>
                </div>
                <div className="card w-full sm:w-full lg:w-72 shadow-xl p-4 bg-slate-100 rounded-xl">
                    <h1 className="text-start text-lg font-semibold mb-4 text-black"> My Profile</h1>
                    <div className="flex justify-center">
                        <img src={profile} alt="" className="w-28" />
                    </div>
                    <p className="text-md font-semibold text-gray-900 text-center mt-4">Fauzan Hakim</p>
                    <p className="text-sm text-center"> admin organizer</p>
                </div>
            </div>
            <h1 className="text-black font-bold text-xl mt-5 mb-2"> Tiket Terjual </h1>
            <div className="flex w-full gap-10 flex-col lg:flex-row">
                <div className="card flex-grow shadow-lg p-4 h-80 sm:h-auto md:w-5">
                    <Diagram />
                </div>
                <div className="card shadow-lg w-full lg:w-96 md:w-80 p-10">
                    <h1 className="text-black font-bold text-lg text-center tracking-widest">Event Terbaru</h1>
                    <ul className="mt-6">
                        <li className="flex flex-row gap-5 card shadow-lg p-3 w-full bg-slate-50 mt-2">
                            <img src={gambar} alt="Event Image" className="w-20 rounded-xl" />
                            <div>
                                <h5 className="text-black font-semibold tracking-wider">Festival event</h5>
                                <h6 className="text-black text-sm">100 Tiket Terjual</h6>
                            </div>
                        </li>
                    </ul>
                    <Link to={'/organizer/event'} className=" mt-5 text-end"> Selengkap nya .... </Link>
                </div>
            </div>
        </div>
    )
}
