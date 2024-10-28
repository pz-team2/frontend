import React from "react";
import { useNavigate } from "react-router-dom";

interface Transaction {
  id: number;
  eventName: string;
  price: string;
  invoice: string;
  date: string;
}

const RiwayatTransaksi: React.FC = () => {
  const navigate = useNavigate();

  const transactions: Transaction[] = [
    {
      id: 1,
      eventName: "Konser Cosmyc Fest",
      price: "Rp.150.000",
      invoice: "efuf-34ddvb-dfje",
      date: "2024-07-22",
    },
    {
      id: 2,
      eventName: "Konser Cosmyc Fest",
      price: "Rp.150.000",
      invoice: "efuf-34ddvb-dfje",
      date: "2024-07-22",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <h1 className="text-[#12496E] text-2xl font-bold mb-8">TRANSAKSI</h1>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-gray-50 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Transaction details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-black">
                {transaction.eventName}
              </h2>
              <p className="text-xl font-bold text-black">
                {transaction.price}
              </p>
              <div className="space-y-1">
                <p className="text-gray-600">
                  <span className="font-medium">Nomor Invoice: </span>
                  {transaction.invoice}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Tanggal Pesanan: </span>
                  {transaction.date}
                </p>
              </div>
            </div>

            {/* Detail button */}
            <button
              onClick={() => navigate(`/transaksi/${transaction.id}`)}
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

export default RiwayatTransaksi;
