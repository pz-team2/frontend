import React from "react";
import { IoIosCalendar, IoIosPricetags } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface CardProps {
  _id: string; 
  title: string;
  date: Date;
  address: string;
  price: number;
  category: string;
  picture: string;
}

const Card: React.FC<CardProps> = ({
  _id,
  title,
  date,
  address,
  price,
  category,
  picture,
}) => {
  return (
    <div className="card bg-[#f4f4f4] w-full sm:w-[300px] lg:w-[338px] shadow-xl">
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
        <p className="flex gap-3">
          <IoIosCalendar size={20} /> {date.toLocaleDateString("id-ID")}
        </p>
        <p className="flex gap-3">
          <FaLocationDot size={20} /> {address}
        </p>
        <p className="flex gap-3">
          <IoIosPricetags size={20} /> Rp. {price.toLocaleString("id-ID")}
        </p>
        <Link to={`/detail/${_id}`} className="w-full">
          <button className="btn w-full bg-primary text-white">Beli Tiket</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
