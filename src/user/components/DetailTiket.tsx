import React from "react";
import { useNavigate } from "react-router-dom";
import qr from "../../assets/img/qr.png";

interface TicketDetails {
  eventName: string;
  ticketNumber: string;
  ticketId: string;
  ownerName: string;
  status: "AVAILABLE" | "USED" | "EXPIRED";
}

// Remove props interface since we'll get the ID from URL params
const DetailTiket: React.FC = () => {
  const navigate = useNavigate();
//   const { id } = useParams<{ id: string }>(); // Get the ID from URL params

  // Sample data - replace with your actual data fetching logic
  const ticketDetails: TicketDetails = {
    eventName: "Konser Cosmyc Fest",
    ticketNumber: "TICKET 1",
    ticketId: "efuf-34ddvb-dfje", // Using the URL parameter
    ownerName: "Fauzan Saputra",
    status: "AVAILABLE",
  };

  return (
    <div className="min-h-screen bg-white p-8">
      {/* Header with navigation */}
      <div className="mb-8">
        <div className="flex items-center gap-4 text-[#12496E] mb-6">
          <button
            className="text-2xl hover:opacity-80 transition-opacity"
            onClick={() => navigate("/user/ticket")}
          >
            MY TICKETS
          </button>
          <span className="text-2xl">{">"}</span>
          <span className="text-2xl font-bold">DETAILS</span>
        </div>
        <h2 className="text-[#12496E] text-3xl font-bold">
          {ticketDetails.eventName}
        </h2>
      </div>

      {/* Ticket Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl">
        <div className="flex items-start space-x-8">
          {/* QR Code */}
          <div className="w-40 h-40 bg-gray-200">
            <img
              src={qr}
              alt="QR Code"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ticket Details */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                {ticketDetails.ticketNumber}
              </h3>
              <p className="text-gray-500 mt-1">{ticketDetails.ticketId}</p>
            </div>

            <div>
              <p className="text-gray-700 text-lg">{ticketDetails.ownerName}</p>
            </div>

            <div>
              <span
                className={`inline-block px-4 py-2 rounded-lg font-semibold
                  ${
                    ticketDetails.status === "AVAILABLE"
                      ? "bg-[#30BFCA] text-white"
                      : ticketDetails.status === "USED"
                      ? "bg-gray-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
              >
                {ticketDetails.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTiket;
