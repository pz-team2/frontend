import Card from "../../components/Card"
import { FaMoneyBillWave } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdConfirmationNumber } from "react-icons/md";
import Diagram from "./Diagram";

export const DashboardOrganizer = () => {
    return (
        <div>
            <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black" > Welcome To Dashboard </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-11 gap-11">
                <Card title={'Penghasilan'} jumlah={'Rp. 30.000'} icons={<FaMoneyBillWave size={40} />} />
                <Card title={'Transaksi'} jumlah={'30'} icons={<AiOutlineTransaction />} />
                <Card title={'Tiket Terjual'} jumlah={'30'} icons={<MdConfirmationNumber />} />
            </div>
            <h1 className="text-black font-bold text-xl mt-5 mb-2"> Tiket Terjual </h1>
            <div className="card shadow-xl border border-gray-200">
                <Diagram />
            </div>
        </div>
    )
}
