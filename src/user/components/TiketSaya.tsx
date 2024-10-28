import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import bannerImage from "../../assets/img/banner.png";
import { useNavigate } from "react-router-dom";


interface Ticket {
  id: number;
  eventName: string;
  date: string;
  location: string;
  venue: string;
  image: string;
}

const TiketSaya: React.FC = () => {
  const navigate = useNavigate();
  // Sample data - replace with your actual data source
  const tickets: Ticket[] = [
    {
      id: 1,
      eventName: "Konser Cosmyc Fest",
      date: "21 Desember 2024",
      location: "Banjarbaru",
      venue: "Himakom FMIPA ULM",
      image: bannerImage,
    },
    {
      id: 2,
      eventName: "Konser Cosmyc Fest",
      date: "21 Desember 2024",
      location: "Banjarbaru",
      venue: "Himakom FMIPA ULM",
      image: bannerImage,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <h1 className="text-[#12496E] text-2xl font-bold mb-8">TIKET SAYA</h1>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-gray-50 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Left side with image */}
            <div className="flex items-center space-x-6">
              <img
                src={ticket.image}
                alt={ticket.eventName}
                className="w-32 h-32 object-cover rounded-lg"
              />

              {/* Event details */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-gray-800">
                  {ticket.eventName}
                </h2>

                <div className="space-y-1">
                  {/* Date */}
                  <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    <span>{ticket.date}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                    <span>{ticket.location}</span>
                  </div>

                  {/* Venue */}
                  <div className="flex items-center text-gray-600">
                    <FaBuilding className="w-4 h-4 mr-2" />
                    <span>{ticket.venue}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detail button */}
            <button
              onClick={() => navigate(`/user/tiket/${ticket.id}`)}
              className="bg-[#30BFCA] hover:bg-[#2aa8b2] text-white px-8 py-2 rounded-lg transition-colors font-semibold"
            >
              DETAIL
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiketSaya;
