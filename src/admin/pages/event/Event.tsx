import { useEffect } from "react";
import { Table } from "../../../components/Layout/Table"
import { useAppDispatch, useAppSelector } from "../../../Redux/hook"
import { dataterbaru } from "../../../Redux/features/dashboard/dashboardSlice";

export const EventData = () => {


  const dispatch = useAppDispatch();

  const { isSucces, events } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dataterbaru)
  }, [dispatch])

  const colums = [
    { key: 'gambar', label: 'gambar' },
    { key: 'Organizer', label: 'Nama Organizer' },
    { key: 'Event', label: 'Nama Event' },
    { key: 'Tiket', label: 'Tiket Terjual' },
    { key: 'Tanggal', label: 'Tanggal Event' },
    { key: 'Status', label: 'Status' },
  ]


  const eventData = isSucces ? events.map(event => ({
    gambar: <div><img src={`http://localhost:3500/${event.picture}`} alt={'gagal data img'} className="w-20 h-14 rounded-xl" /></div>,
    Event: event.title,
    Organizer: event.organizerName,
    Tiket: `${event.ticketsSold} Tiket`,
    Tanggal : event.date,
    Status: <div className="bg-red-300 text-center rounded-2xl p-1 text-white">{event.status}</div>,
  })):[] 

return (
  <div className="p-6">
    <h1 className="mb-5 text-2xl font-extrabold text-black text-shadow">Events</h1>
    <div className="card shadow-md border border-gray-200 flex-grow p-6">
      <Table columns={colums} data={eventData} />
    </div>
  </div>
)
}
