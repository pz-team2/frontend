import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import api from "../../services/api";

const RiwayatTransaksi: React.FC = () => {
  const [riwayat, setRiwayat] = useState<any[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Modal Component
  const Modal: React.FC<{ transaction: any, onClose: () => void }> = ({ transaction, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-primary p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold text-white mb-4 text-center">Detail</h2>
          <div className="text-white">
            <div className=" overflow-x-auto">
              <table className="table-auto text-left w-full md:w-auto lg:w-96">
                <tbody className="font-semibold text-white">
                  <tr>
                    <th className="py-2">Nomor Invoice</th>
                    <td className="px-2">:</td>
                    <td className="font-medium py-2">{transaction.order_id}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold text-white py-2">Tanggal Pesanan:</th>
                    <td className="px-2">:</td>
                    <td className="font-medium py-2">{format(new Date(transaction.event.date), "d MMMM yyyy")}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold text-white py-2">Quantity:</th>
                    <td className="px-2">:</td>
                    <td className="font-medium py-2">{transaction.quantity}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold text-white py-2">Jumlah</th>
                    <td className="px-2">:</td>
                    <td className="font-medium py-2">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(transaction.amount)}</td>
                  </tr>
                  <tr>
                    <th className="font-semibold text-white py-2">Status</th>
                    <td className="px-2">:</td>
                    <td className="font-medium py-2">{transaction.paymentStatus === 'paid' ? 'Sukses' : 'Belum Lunas'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 text-end">
            <button
              onClick={onClose}
              className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-slate-100"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      <h1 className="text-[#12496E] text-2xl font-bold mb-8">TRANSAKSI</h1>
      <div className="space-y-4">
        {riwayat.filter(transaction => transaction.event).length === 0 ? (
          <div className="text-center flex justify-center">
            <h2 className="text-black font-bold text-lg">Belum Ada History Transaksi .</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {riwayat.filter(transaction => transaction.event).map((transaction) => (
              <div key={transaction._id} className="bg-gray-50 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
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

                <button
                  onClick={() => handleOpenModal(transaction)}
                  className="bg-[#30BFCA] hover:bg-[#2aa8b2] text-white px-8 py-2 rounded-lg transition-colors font-semibold"
                >
                  DETAIL
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {isModalOpen && selectedTransaction && (
        <Modal transaction={selectedTransaction} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RiwayatTransaksi;
