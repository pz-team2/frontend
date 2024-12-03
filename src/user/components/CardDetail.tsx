import { FaLocationDot } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";
interface CardDetailProps {
  title: string;
  description: string;
  address: string;
  date: Date | string;
  picture?: string;
}

const CardDetail: React.FC<CardDetailProps> = ({
  title,
  description,
  address,
  date,
}) => {
  return (
    <div className="card bg-[#f4f4f4] p-10 shadow-xl rounded-md space-y-2">
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      
      <p
        className="text-gray-600 py-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* Ikon untuk lokasi */}
      <p className="flex items-center text-gray-600">
        <FaLocationDot className="mr-2 text-gray-500" size={18} />
        {`Lokasi : ${address}`}
      </p>

      {/* Ikon untuk tanggal */}
      <p className="flex items-center text-gray-600">
        <IoIosCalendar className="mr-2 text-gray-500" size={18} />
        {`Tanggal : ${date}`}
      </p>
    </div>
  );
};

export default CardDetail;
