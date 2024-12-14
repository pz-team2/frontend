import Card from "../../components/Card";
import React from 'react'
import { FaMoneyBillWave } from "react-icons/fa6";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdConfirmationNumber } from "react-icons/md";
import Diagram from "./Diagram";
import profilegambar from "../../assets/img/3.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPaymentReport } from "../../Redux/features/organizer/organizerSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import api from "../../services/api";
const PICTURE = import.meta.env.VITE_API_URL_PICTURE

export const DashboardOrganizer = () => {
  const dispatch = useAppDispatch();
  const { paymentReport, loading } = useAppSelector((state) => state.organizer);
  const [dataletest, setDataletest] = useState<any[]>([]);
  const [profile, setDataProfile] = useState<any>({});

  const fetchData = async () => {
    try {
      const response = await api.get('organizers/getdataevent')
      setDataletest(response.data.data)
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  const fetchProfile = async () => {
    try {
      const responseProfile = await api.get('organizers/profile')
      setDataProfile(responseProfile.data.data)
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }


  useEffect(() => {
    dispatch(getPaymentReport());
    fetchData();
    fetchProfile()
  }, [dispatch]);

  const monthlySales = paymentReport?.monthlySales || [];
  const labels = monthlySales.map((item) => item.month); // Nama bulan
  const data = monthlySales.map((item) => item.ticketsSold); // Jumlah tiket

  return (
    <div>
      <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black">
        {" "}
        Welcome To Dashboard ✋
      </h1>
      <div className=" flex flex-col lg:flex-row md:grid-cols-1 sm:flex-col gap-11">
        <div className="flex-grow card rounded-xl shadow-lg bg-slate-100 p-5">
          <h1 className="mb-4 text-xl font-extrabold mt-4 text-black">
            {" "}
            Hello, Festival Bandung{" "}
          </h1>
          <p>Yuk, Lihat Data Event Kamu </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-11 gap-11 mt-5">
            <Card
              title="Penghasilan"
              jumlah={
                paymentReport
                  ? `Rp. ${paymentReport.totalPayment.toLocaleString()}`
                  : "Loading..."
              }
              icons={<FaMoneyBillWave />}
            />
            <Card
              title="Transaksi"
              jumlah={
                paymentReport
                  ? `${paymentReport.totalTransactions}`
                  : "Loading..."
              }
              icons={<AiOutlineTransaction />}
            />
            <Card
              title="Tiket Terjual"
              jumlah={
                paymentReport
                  ? `${paymentReport.totalTicketsSold}`
                  : "Loading..."
              }
              icons={<MdConfirmationNumber />}
            />
          </div>
        </div>
        <Link to='/organizer/event/profile'>
          <div className="card w-full sm:w-full lg:w-72 shadow-xl p-4 bg-slate-100 rounded-xl">
            <h1 className="text-start text-lg font-semibold mb-4 text-black">
              {" "}
              My Profile
            </h1>
            <div className="flex justify-center">
              <img src={profilegambar} alt="" className="w-28" />
            </div>
            <p className="text-md font-semibold text-gray-900 text-center mt-4">
              {profile.organizerName || "Loading..."}
            </p>
            <p className="text-sm text-center"> admin organizer</p>
            <div className="flex justify-center mt-3">
              <p className={`text-sm text-center ${profile.status === "Aktif" ? "bg-secondary" : "bg-red-400"} text-white p-2 rounded-full w-44 inline-flex justify-center items-center`}>
                <span>{profile.status}</span>
              </p>
            </div>
          </div>
        </Link>

      </div>
      <h1 className="text-black font-bold text-xl mt-5 mb-2">
        {" "}
        Tiket Terjual{" "}
      </h1>
      <div className="flex w-full gap-10 flex-col lg:flex-row">
        <div className="card flex-grow shadow-lg p-4 h-80 sm:h-auto md:w-5">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Diagram labels={labels} data={data} />
          )}
        </div>
        <div className="card shadow-lg w-full lg:w-96 md:w-80 p-10">
          <h1 className="text-black font-bold text-lg text-center tracking-widest">
            Event Terbaru
          </h1>
          <ul className="mt-6">
            {dataletest.length === 0 ? (
              <li className="flex justify-center text-gray-500">No events available</li>
            ) : (
              dataletest.map((event, index) => (
                <li key={index} className="flex flex-row gap-5 card shadow-lg p-3 w-full bg-slate-50 mt-2">
                  <img src={`${PICTURE}${event.picture}`} alt="Event Image" className="w-20 rounded-xl" />
                  <div>
                    <h5 className="text-black font-semibold tracking-wider">{event.title || "Event Title"}</h5>
                    <h6 className="text-black text-sm">{event.ticketsSold} Tiket Terjual</h6>
                  </div>
                </li>
              ))
            )}

          </ul>
          <Link to={"/organizer/event"} className=" mt-5 text-end">
            {" "}
            Selengkap nya ....{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
