import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import api from "../../services/api";


// Modal Component
const Modal: React.FC<{ transaction: any, onClose: () => void }> = ({ transaction, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold text-black mb-4">Detail Transaksi</h2>
        <div>
          <p><strong>Nomor Invoice:</strong> {transaction.order_id}</p>
          <p><strong>Tanggal Pesanan:</strong>  {format(new Date(transaction.event.date), "d MMMM yyyy")}</p>
          <p><strong>Quantity:</strong> {transaction.quantity}</p> {/* Menampilkan Quantity */}
          <p><strong>Jumlah:</strong> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(transaction.amount)}</p>
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

const RiwayatTransaksi: React.FC = () => {
  const [riwayat, setRiwayat] = useState<any[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<any | null>(null); // State untuk transaksi yang dipilih
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk menampilkan atau menutup modal

  const fetchRiwayat = async () => {
    try {
      const response = await api.get("payments/history");
      setRiwayat(response.data.data);
    } catch (error) {
      console.error("Error fetching transaction history:", error);
    }
  };

  const handleOpenModal = (transaction: any) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  useEffect(() => {
    fetchRiwayat();
  }, []);

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <h1 className="text-[#12496E] text-2xl font-bold mb-8">TRANSAKSI</h1>
      <div className="space-y-4">
        {riwayat.filter(transaction => transaction.event).length === 0 ? (
          <div className="text-center flex justify-center">
            <h2 className="text-black font-bold text-lg">Belum Ada History Transaksi .</h2>
          </div>
        ) : (
          riwayat.filter(transaction => transaction.event).map((transaction) => (
            <div
              key={transaction._id}
              className="bg-gray-50 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Transaction details */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-black">
                  {transaction.event.title}
                </h2>
                <p className="text-xl font-bold text-black">
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(transaction.amount)}
                </p>
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <span className="font-extrabold">Nomor Invoice: </span>
                    {transaction.order_id}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-extrabold">Tanggal Pesanan: </span>
                    {format(new Date(transaction.event.date), "d MMMM yyyy")}
                  </p>
                </div>
              </div>

              {/* Detail button */}
              <button
                onClick={() => handleOpenModal(transaction)} // Membuka modal dengan data transaksi
                className="bg-[#30BFCA] hover:bg-[#2aa8b2] text-white px-8 py-2 rounded-lg transition-colors font-semibold"
              >
                DETAIL
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedTransaction && (
        <Modal transaction={selectedTransaction} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RiwayatTransaksi;
