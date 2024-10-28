import banner from "../../assets/img/banner.png";
import { IoIosCalendar, IoIosPricetags } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CardUnggulan = () => {
  return (
    <>
      <div className="card bg-[#f4f4f4] w-[300px] lg:w-[546px] shadow-xl">
        <figure>
          <img
            src={banner}
            alt="Shoes"
            className="object-cover h-[200px] rounded flex-col justify-start items-start flex"
          />
        </figure>
        <div className="card-body text-gray-600">
          <div className="badge badge-outline">Music</div>
          <h2 className="card-title text-black">Konser Cosmyc Fest</h2>
          <p className="flex gap-3">
            <IoIosCalendar size={20} /> 21 Desember 2024
          </p>
          <p className="flex gap-3">
            <FaLocationDot size={20} /> Banjarbaru
          </p>
          <p className="flex gap-3">
            <IoIosPricetags size={20} /> Rp. 50.000
          </p>
          <Link to="/transaksi">
            <button className="btn w-full outline-none bg-primary text-white mt-2">
              Beli
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardUnggulan;
