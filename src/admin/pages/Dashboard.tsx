import { VscOrganization } from "react-icons/vsc";
import React from 'react'
import { MdEventNote } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import Card from "../../components/Card";
import { Table } from "../../components/Table";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { useEffect } from "react";
import { dataStatic, dataterbaru } from "../../Redux/features/dashboard/dashboardSlice";
const PICTURE = import.meta.env.VITE_API_URL_PICTURE

export const Dashboard = () => {
  const dispatch = useAppDispatch();

  const { isSucces, loading, stats, events } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dataStatic());
    dispatch(dataterbaru());
  }, [dispatch]);

  const limitPage = events.slice(0, 5)

  const eventData = isSucces && limitPage
    ? limitPage.map(event => ({
      name: event.date,
      // tanggal: event.date,
      tiket: `${event.ticketsSold} Tiket`,
      event: `${event.title}`,
      gambar: <div><img src={`${PICTURE}${event.picture}`} alt={'gagal data img'} className="w-20 h-14 rounded-xl" /></div>,
      status: <div className="bg-red-300 text-center rounded-2xl p-1 text-white">{event.status}</div>,
    }))
    : [];

  // Kolom tabel
  const columns = [
    { key: 'gambar', label: 'Gambar' },
    { key: 'event', label: 'Nama Event' },
    { key: 'tiket', label: 'Tiket Terjual' },
    { key: 'name', label: 'Tanggal - Event' }, 
    // { key: 'status', label: 'Status' },
    // { key: 'tanggal', label: 'Tanggal Event' },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <h1 className="mb-5 text-xl md:text-2xl font-extrabold text-black">Welcome To Dashboard</h1>

      {loading === "loading" ? (
        <span className="loading loading-dots loading-lg"></span>
      ) : isSucces && stats ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-11">
          <Card title={"Organizer"} jumlah={stats.totalOrganizers.toString()} icons={<VscOrganization />} />
          <Card title={"Event"} jumlah={stats.totalEvents.toString()} icons={<MdEventNote />} />
          <Card title={"User"} jumlah={stats.totalUsers.toString()} icons={<FaUser />} />
        </div>
      ) : (
        <p> Static Tidak Ada</p>
      )}

      <h1 className="mb-5 mt-8 md:mt-14 text-xl md:text-2xl font-extrabold text-black">Event Statistics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 md:gap-9">
        <div className="card shadow-md border border-gray-400 w-full overflow-hidden">
          <div className="flex justify-end mr-5">
            <Link to='/admin/event' className="text-center bg-primary w-28 mt-3 text-white rounded-badge p-1"> View All </Link>
          </div>
          {eventData.length > 0 ? (
            <Table columns={columns} data={eventData} />
          ) : (
            <p className="p-4 text-black">Data Event Terbaru Tidak Ada</p>
          )}
        </div>

        <div className="card w-full lg:w-96 shadow-md p-4 md:p-6">
          <h4 className="text-center text-black font-semibold text-base md:text-lg mb-3">Organizer Latest</h4>
          <ol className="list-decimal text-black text-sm md:text-base space-y-2">
            {events.slice(0, 10).map((event, index) => (
              <li className="flex flex-row gap-5 card shadow-lg p-3 w-full bg-slate-50 mt-2" key={index}>
                {/* <img src={`${PICTURE}${event.picture}`} alt={'gagal data img'} className="w-20 h-14 rounded-xl" /> */}
                {/* <div className="flex gap-3"> */}
                  <span className="text-black font-semibold tracking-wider">{index + 1}. </span>
                  <h5 className="text-black font-semibold tracking-wider">{event.organizerName}</h5>
                {/* </div> */}
              </li>
            ))}
          </ol>
          <div className="flex justify-end mr-5">
            <Link to='/admin/organizer' className="text-center mt-3 text-gray-500 rounded-badge p-1"> Selengkap nya ... </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
