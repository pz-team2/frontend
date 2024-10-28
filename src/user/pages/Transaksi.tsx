import Navbar from "../components/Navbar";
import banner from "../../assets/img/banner.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";
import TicketCounter from "../components/TicketCounter";
import CardDetail from "../components/CardDetail";

const Transaksi = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-[1338px] mx-auto px-4 mt-10 flex flex-col space-y-6">
        <img
          src={banner}
          alt="banner"
          className="w-full h-[331px] object-cover rounded-2xl shadow-md"
        />

        <div className="space-y-4">
          <h2 className="text-primary text-4xl font-bold">
            Konser Cosmyc Fest
          </h2>
          <div className="pb-4 border-b-4  border-gray-200 ">
            <div className="flex flex-col md:flex-row gap-2 lg:gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <IoIosCalendar
                  className="text-gray-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-base">21 Desember 2024</span>
              </div>

              <div className="flex items-start gap-2">
                <FaLocationDot
                  className="text-gray-500 flex-shrink-0"
                  size={20}
                />
                <span className="text-base">
                  GOR Rudy Resnawan Jl. Trikora, Guntungmanggis, Kec. Landasan
                  Ulin, Kota Banjar Baru, Kalimantan Selatan
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
            Tentang Event
          </h3>
          <CardDetail />
        </div>
        <TicketCounter ticketType={"Presale 1"} price={50000} />
      </div>
    </div>
  );
};

export default Transaksi;
