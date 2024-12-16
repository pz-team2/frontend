
import React from 'react'
import { IoIosCalendar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidUserRectangle } from "react-icons/bi";
import { Link, useParams } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import { MdPriceChange } from "react-icons/md";
import { FaWindowMaximize } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import api from '../../services/api';
const PICTURE = import.meta.env.VITE_API_URL_PICTURE
export const Detail = () => {

    const { id } = useParams();
    const [data, setData] = useState<any>({});


    const fetchData = async () => {

        try {
            const response = await api.get(`events/event-by-revenue/${id}`)
            setData(response.data.data)
        } catch (error) {
            console.log(error)
        }

    }

    if (!data) {
        <h1> Event Tidak Ada</h1>
    }

    // const tiketTersisa = (data.quota || 0) - (data.ticketsSold || 0);
    useEffect(() => {
        fetchData()
    })
    return (
        <div>
            <Link to='/organizer/event' className='text-black flex items-center gap-2 mb-5'>
                <IoChevronBackOutline size={24} />
                <span>Back to Events</span>
            </Link>

            <h1 className="text-3xl font-extrabold mb-8 text-gray-900">Detail Event - {data.title}</h1>

            <div className="border border-gray-300 rounded-lg p-8 bg-white shadow-lg">
                <div className="badge bg-primary p-5 mb-4 text-white"> {data.categoryName} </div>
                <div className="badge bg-cyan-200 border-0 text-black p-5 ml-3"> {data.status} </div>
                <div className='relative flex flex-col lg:flex-row gap-6'>
                    <div className="relative w-full lg:w-1/2 overflow-hidden rounded-lg shadow-md">
                        <img src={`${PICTURE}${data.picture}`} alt="Event Banner" className='w-full h-full object-cover' />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-4">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                            <div className="bg-secondary p-4 text-center shadow-md rounded-lg">
                                <h1 className='text-xl text-white'>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.revenue)}</h1>
                                <h2 className="text-md font-bold text-white">Penghasilan</h2>
                            </div>
                            <div className="bg-secondary p-4 text-center shadow-md rounded-lg">
                                <h1 className='text-xl text-white'>{data.ticketsSold}</h1>
                                <h2 className="text-md font-bold text-white">Ticket Terjual</h2>
                            </div>
                            <div className="bg-secondary p-4 text-center shadow-md rounded-lg">
                                <h1 className='text-xl text-white'>{data.quota }</h1>
                                <h2 className="text-md font-bold text-white">Tiket Tersisa</h2>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-lg shadow-md">
                            <h1 className='text-center text-black font-bold text-lg'> Festival  Musik </h1>
                            <h5 className="text-md font-medium mb-4 text-gray-800">Informasi Event : </h5>
                            <div className="grid gap-4 text-gray-700 font-medium">
                                <div className="flex items-center gap-2">
                                    <IoIosCalendar />
                                    <h6>Tanggal: {data.date}</h6>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLocationDot />
                                    <h6>Location: {data.address}</h6>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BiSolidUserRectangle />
                                    <h6>Organizer: {data.organizerName}</h6>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdPriceChange />
                                    <h6>Harga: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.price)}</h6>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaWindowMaximize />
                                    <h6>Kuota: {data.quotaall} Tiket</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-8 text-gray-800'>
                    <h1 className='font-bold text-xl tracking-wide'>Deskripsi</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
            </div>
        </div>
    );
}
