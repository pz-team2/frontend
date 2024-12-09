import React from 'react'
import { IoIosCalendar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidUserRectangle } from "react-icons/bi";
import { Link, useParams } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import { MdPriceChange } from "react-icons/md";
import { FaWindowMaximize } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
import { useEffect } from 'react';
import { RootState } from '../../../Redux/store';
import { format } from 'date-fns';
import { getEventById } from '../../../Redux/features/events-redux/EventSlice';
const PICTURE = import.meta.env.VITE_API_URL_PICTURE

export const DetailEvent = () => {

    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const { selectedEvent, message, loading } = useAppSelector((state: RootState) => state.event);

    useEffect(() => {
        if (id) {
            dispatch(getEventById(id));
        }
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;

    if (!selectedEvent) return <div>{message || "Event not found"}</div>;

    const displayDate = format(new Date(selectedEvent.date), "d MMMM yyyy");
    const formattedPrice = new Intl.NumberFormat('id-ID').format(selectedEvent.price);



    return (
        <div>
            <Link to={`/admin/organizer/detail/${selectedEvent.organizer?._id}`} className='text-black flex items-center gap-2 mb-5'>
                <IoChevronBackOutline size={24} />
                <span>Back to Event</span>
            </Link>

            <h1 className="text-3xl font-extrabold mb-8 text-gray-900">Detail Event - By {selectedEvent.title}</h1>            <div className="border border-gray-300 rounded-lg p-8 bg-white shadow-lg">
                <div className="badge bg-primary p-5 mb-4 text-white"> {selectedEvent.category?.name || "Kategori Tidak Tersedia"} </div>
                <div className="badge bg-cyan-200 border-0 text-black p-5 ml-3"> {selectedEvent.status} </div>
                <div className='relative flex flex-col lg:flex-row gap-6'>
                    <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-md">
                        <img src={`${PICTURE}${selectedEvent.picture}`} alt="Event Banner" className='w-full h-full object-cover' />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-4">

                        <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                            <h1 className='text-center text-black font-bold text-xl mb-8'> {selectedEvent.title} </h1>
                            <h5 className="text-md font-medium mb-4 text-gray-800">Informasi Event : </h5>
                            <div className="grid gap-4 text-gray-700 font-medium">
                                <div className="overflow-x-auto">
                                    <table className="table-auto text-left w-full mb-16">
                                        <tbody className="font-semibold text-black">
                                            <tr>
                                                <th className="py-2">
                                                    <div className="flex items-center gap-2">
                                                        <IoIosCalendar />
                                                        <h6>Tanggal</h6>
                                                    </div> </th>
                                                <td className="px-2">:</td>
                                                <td className="font-medium py-2">{displayDate}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-semibold text-black py-2">
                                                    <div className="flex items-center gap-2">
                                                        <FaLocationDot />
                                                        <h6>Location</h6>
                                                    </div>
                                                </th>
                                                <td className="px-2">:</td>
                                                <td className="font-medium py-2">{selectedEvent.address}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-semibold text-black py-2">
                                                    <div className="flex items-center gap-2">
                                                        <BiSolidUserRectangle />
                                                        <h6>Organizer</h6>
                                                    </div>
                                                </th>
                                                <td className="px-2">:</td>
                                                <td className="font-medium py-2">{selectedEvent.organizer?.organizerName}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-semibold text-black py-2">
                                                    <div className="flex items-center gap-2">
                                                        <MdPriceChange />
                                                        <h6>Harga: </h6>
                                                    </div>
                                                </th>
                                                <td className="px-2">:</td>
                                                <td className="font-medium py-2">Rp. {formattedPrice}</td>
                                            </tr>
                                            <tr>
                                                <th className="font-semibold text-black py-2">
                                                    <div className="flex items-center gap-2">
                                                        <FaWindowMaximize />
                                                        <h6>Kuota: </h6>
                                                    </div>
                                                </th>
                                                <td className="px-2">:</td>
                                                <td className="font-medium py-2">{selectedEvent.quota} Tiket</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-8 text-gray-800'>
                    <h1 className='font-bold text-xl tracking-wide mb-4'>Deskripsi</h1>
                    <div dangerouslySetInnerHTML={{ __html: selectedEvent.description }} />
                </div>
            </div>
        </div>
    )
}
