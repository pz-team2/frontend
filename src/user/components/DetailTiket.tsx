import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchTicketsByPaymentId } from "../../Redux/features/ticket/ticketSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";

const DetailTiket: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  // Mengambil state dari Redux
  const { tickets, loading } = useAppSelector(state => state.ticket);

  useEffect(() => {
    if (id) {
      dispatch(fetchTicketsByPaymentId(id)); // Memanggil action untuk mengambil detail tiket berdasarkan id
    }
  }, [id, dispatch]);

  // Jika data tiket belum tersedia atau dalam proses loading
  if (loading) {
    return <div>
      <h1 className="mt-10  font-extrabold text-xl text-black"> Sedang Memuat Data</h1>
      <div className=" mt-6  flex-col gap-4 grid grid-cols-2">
        <div className="skeleton h-64 w-full bg-slate-300"></div>
        <div className="skeleton h-64 w-full bg-slate-300"></div>
      </div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-white p-8 grid xl:grid-cols-2 grid-cols-1 sm:gap-4 gap-12 content-start">
      {/* Menampilkan pesan error jika ada */}
      {/* {message && <p className="text-center text-red-500">{message}</p>} */}

      {/* Header dengan navigasi */}
      {tickets.map((ticket, i) => (
        <>
          {i === 0 && (
            <div className="xl:col-span-2 col-span-1">
              <div className="flex items-center gap-2 md:gap-4 text-[#12496E] mb-3 md:mb-6">
                <button
                  className="text-lg md:text-2xl hover:opacity-80 transition-opacity"
                  onClick={() => navigate("/user/ticket")}
                >
                  MY TICKETS
                </button>
                <span className="text-lg md:text-2xl">{">"}</span>
                <span className="text-lg md:text-2xl font-bold">DETAILS</span>
              </div>
              <h2 className="text-[#12496E] text-xl md:text-3xl font-bold">
                {ticket.payment?.event?.title}
              </h2>
            </div>
          )}

          {/* Kartu Tiket */}
          <div key={ticket._id} className="col-span-1 h-fit w-full bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-2xl">
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-4 md:space-y-0">
              {/* QR Code */}
              <div className="w-full md:w-40 h-40 bg-gray-200 flex items-center justify-center">
                <img src={ticket.qrcode} alt="QR Code" className="w-52 h-52 object-cover" />
              </div>

              {/* Detail Tiket */}
              <div className="flex-1 space-y-4 text-center md:text-left w-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {ticket.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm md:text-base break-all">
                    {ticket._id}
                  </p>
                </div>

                <div>
                  <p className="text-gray-700 text-base md:text-lg">
                    {ticket.payment?.user?.fullname || ticket.payment?.user?.username}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-semibold text-sm md:text-base
                      ${ticket.status === "AVAILABLE"
                        ? "bg-[#30BFCA] text-white"
                        : ticket.status === "USED"
                          ? "bg-red-500 text-white"
                          : "bg-red-500 text-white"}`}
                  >
                    {ticket.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default DetailTiket;
