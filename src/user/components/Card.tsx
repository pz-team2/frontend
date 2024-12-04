import React from "react";
import { IoIosCalendar, IoIosPricetags } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../../components/Fragments/Button";
import { FaTicket } from "react-icons/fa6";


interface CardProps {
  _id: string;
  title: string;
  date: Date;
  address: string;
  price: number;
  quota: number;
  category: string; // Always a string
  picture: string;
  width?: string; // Optional prop to set width of the card
}

const Card: React.FC<CardProps> = ({
  _id,
  title,
  date,
  address,
  quota,
  price,
  category,
  picture,
  width = "100%", // Default width is full width if not provided
}) => {
  return (
    <div
      className={`card bg-[#f4f4f4] w-full sm:w-[${width}] lg:w-[${width}] shadow-xl`}
    >
      <figure>
        <img
          src={picture}
          alt={title}
          className="object-cover h-[200px] w-full rounded-t-lg"
        />
      </figure>
      <div className="card-body text-gray-600">
        <div className="badge badge-outline">{category}</div>
        <h2 className="card-title text-black">{title}</h2>
        <p className="flex gap-3 items-center">
          <IoIosCalendar size={20} /> {date.toLocaleDateString("id-ID")}
        </p>
        <p className="flex gap-3 items-center">
          <FaLocationDot size={20} /> {address}
        </p>
        <p className="flex gap-3 items-center">
          <IoIosPricetags size={20} /> Rp. {price.toLocaleString("id-ID")}
        </p>
        <p className="flex gap-3 items-center">
          <FaTicket size={20} /> {quota} Tiket Tersedia
        </p>
        
        {/* Cek kuota dan tampilkan tombol yang sesuai */}
        {quota > 0 ? (
          <Link to={`/detail/${_id}`} className="w-full">
            <button className="btn w-full bg-primary text-white">Beli Tiket</button>
          </Link>
        ) : (
          <Button children={'Tiket Sudah Habis'} variant="btn w-full  bg-gray-400 text-black text-bold"/>
        )}
      </div>
    </div>
  );
};

export default Card;
