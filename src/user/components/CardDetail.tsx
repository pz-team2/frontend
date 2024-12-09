import React from "react";
import { FaLocationDot, FaTicket } from "react-icons/fa6";
import { IoIosCalendar, IoIosTime } from "react-icons/io";

interface CardDetailProps {
  title: string;
  description: string;
  address: string;
  date: Date | string;
  startTime: string;
  finishTime: string;
  quota: number;
}

const CardDetail: React.FC<CardDetailProps> = ({
  title,
  description,
  address,
  date,
  startTime,
  finishTime,
  quota
}) => {
  // Format date as id-ID locale string
  const formattedDate = typeof date === "string" ? new Date(date) : date;
  const formattedDateString = formattedDate.toLocaleDateString("id-ID");

  return (
    <div className="card bg-[#f4f4f4] p-10 shadow-xl rounded-md space-y-2">
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      
      <p
        className="text-gray-600 py-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {/* Ikon untuk tanggal */}
      <p className="flex items-center text-gray-600">
        <IoIosCalendar className="mr-2 text-gray-500 shrink-0" size={20} />
        {`Tanggal : ${formattedDateString}`}
      </p>

      {/* Ikon untuk waktu */}
      {startTime && finishTime && (
        <p className="flex items-center text-gray-600">
          <IoIosTime className="mr-2 text-gray-500 shrink-0" size={20} />
          {`Waktu : ${startTime} - ${finishTime}`}
        </p>
      )}

      {/* Ikon untuk lokasi */}
      <p className="flex items-center text-gray-600">
        <FaLocationDot className="mr-2 text-gray-500 shrink-0" size={20} />
        {`Lokasi : ${address}`}
      </p>

      {/* Kuota */}
      {quota !== undefined && (
        <p className="flex items-center text-gray-600">
          <FaTicket className="mr-2 text-gray-500" size={20} />
          {`${quota} Tiket Tersedia`}
        </p>
      )}
    </div>
  );
};

export default CardDetail;
