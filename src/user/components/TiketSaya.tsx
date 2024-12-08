import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
// import bannerImage from "../../assets/img/banner.png";  
import { RootState } from "../../Redux/store";
import { fetchTicketsByUserId } from "../../Redux/features/ticket/ticketSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
const PICTURE = import.meta.env.VITE_API_URL_PICTURE


const TiketSaya: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Mengambil state dari Redux, dan pastikan tickets diinisialisasi sebagai array kosong
  const { tickets = [], loading } = useAppSelector((state: RootState) => state.ticket);

  // Memanggil fetchTicketsByUserId saat komponen pertama kali dimuat
  useEffect(() => {
    dispatch(fetchTicketsByUserId());
  }, [dispatch]);

  // Fungsi untuk memformat tanggal
  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  // Periksa apakah tickets adalah array sebelum memanggil filter
  const uniqueTickets = Array.isArray(tickets)
    ? tickets.filter(
        (ticket, index, self) =>
          index === self.findIndex((t) => t.payment?._id === ticket.payment?._id)
      )
    : [];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white rounded-lg p-4 md:p-8 shadow-sm">
      <h1 className="text-[#12496E] text-xl md:text-2xl font-bold mb-4 md:mb-8">
        TIKET SAYA
      </h1>

      {/* Menampilkan pesan jika ada */}

      {/* Cek jika tidak ada tiket */}
      {uniqueTickets.length === 0 ? (
        <div className="text-center text-gray-500">Anda belum memiliki tiket.</div>
      ) : (
        <div className="space-y-4">
          {uniqueTickets.map((ticket) => (
            <div
              key={ticket._id}
              className="bg-gray-50 rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Left side with image and details */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full md:w-auto">
                <img
                  src={`${PICTURE}${ticket.payment?.event?.picture}`}
                  alt={ticket.payment?.event?.title}
                  className="w-full md:w-32 h-48 md:h-32 object-cover rounded-lg"
                />

                {/* Event details */}
                <div className="space-y-2 w-full md:w-auto">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800">
                    {ticket.payment?.event?.title}
                  </h2>

                  <div className="space-y-1">
                    {/* Date */}
                    <div className="flex items-center text-gray-600 text-sm md:text-base">
                      <FaCalendarAlt className="w-4 h-4 mr-2" />
                      <span>{formatDate(ticket.payment?.event?.date)}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-600 text-sm md:text-base">
                      <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                      <span>{ticket.payment?.event?.address}</span>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center text-gray-600 text-sm md:text-base">
                      <FaBuilding className="w-4 h-4 mr-2" />
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detail button */}
              <button
                onClick={() => navigate(`/user/tiket/${ticket.payment?._id}`)}
                className="w-full md:w-auto bg-[#30BFCA] hover:bg-[#2aa8b2] text-white px-6 md:px-8 py-2 rounded-lg transition-colors font-semibold text-center"
              >
                DETAIL
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TiketSaya;
