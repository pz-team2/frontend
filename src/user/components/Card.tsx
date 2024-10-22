import banner from "../../assets/img/banner.png";
import { IoIosCalendar, IoIosPricetags } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div className="card bg-white max-w-96 shadow-xl">
        <figure>
          <img
            src={banner}
            alt="Shoes"
            className="object-cover h-[200px] rounded flex-col justify-start items-start flex"
          />
        </figure>
        <div className="card-body">
          <div className="badge badge-outline">Music</div>
          <h2 className="card-title">Konser Cosmyc Fest</h2>
          <p className="flex gap-3">
            <IoIosCalendar size={20} /> 21 Desember 2024
          </p>
          <p className="flex gap-3">
            <FaLocationDot size={20} /> Banjarbaru
          </p>
          <p className="flex gap-3">
            <IoIosPricetags size={20} /> Rp. 50.000
          </p>
          <button className="bg-custom-secondary text-white rounded-lg px-6 py-2 mt-4">
            Beli
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
