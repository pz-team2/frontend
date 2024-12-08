/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Input } from '../../../components/Fragments/Input';
import { Editor as TinyMCEEditor } from '@tinymce/tinymce-react';
import { useAppDispatch } from "../../../Redux/hook";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { dataCategory } from "../../../Redux/features/category/categorySlice";
import { EventErrorAndLoading, tambahEvent } from '../../../Redux/features/events-redux/EventSlice';

export const TambahEvent = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const organizerId = useParams<{ id: string }>().id || "";
    const { loading } = useSelector(EventErrorAndLoading);
    // const message = useSelector(EventMessage);

    // 1. Set Data Untuk Form
    const [formEvent, setFormEvent] = useState({
        _id: '',
        category: '',
        title: '',
        date: new Date(),
        address: '',
        description: '',
        status: '',
        quota: 0,
        price: 0,
        startTime: '',
        finishTime: '',
        picture: '',
        organizer: '',
        __v: 0,
    });

    // 2. Membuat Function Untuk Mengubah Data Form
    const handleEvent = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormEvent({
            ...formEvent,
            [name]:
                name === "date" ? new Date(value) :
                    name === "quota" || name === "price" ? parseInt(value) :
                        value,
        });
    };

    // 3. Membuat Function Untuk File
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0] as any;
            
            if (file.size > 1048576) { // 1 MB = 1048576 bytes
                Swal.fire({
                    icon: "warning",
                    title: "Peringatan!",
                    text: "Ukuran gambar tidak boleh lebih dari 1 MB.",
                });
                // Reset nilai input file agar tidak tersimpan
                e.target.value = ""; 
                return;
            }
    
            setFormEvent({
                ...formEvent,
                picture: file,
            });
        }
    };
    

    // 4. Membuat Function Untuk Membuat Editor
    const handleEditorChange = (content: string) => {
        setFormEvent({
            ...formEvent,
            description: content,
        });
    };

    // 5. Memanggil Data Category Untuk Memilih Category
    const { datacategory } = useSelector((state: any) => state.category);

    useEffect(() => {
        dispatch(dataCategory());
    }, [dispatch]);

    // 6. Membuat Function Handle Submit Untuk Menambahkan Data nya 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formEvent.picture) {
            Swal.fire({
                icon: "warning",
                title: "Peringatan!",
                text: "Silakan unggah gambar untuk event.",
            });
            return;
        }

        const result = await dispatch(tambahEvent({ id: organizerId, data: formEvent }));
        console.log(result)
        // Periksa apakah tambahEvent berhasil
        if (tambahEvent.fulfilled.match(result)) {
            Swal.fire({
                icon: "success",
                title: "Berhasil!",
                text: "Event berhasil ditambahkan.",
            });
            navigate(`/admin/organizer/detail/${organizerId}`);
        } else {
            // Dapatkan pesan error dari response backend
            const errorMessage = result.payload ? result.payload : "Event tidak berhasil ditambahkan.";
            Swal.fire({
                icon: "error",
                title: "Gagal!",
                text: `Error: ${errorMessage}`,
            });
        }
    };

    return (
        <div>
            <Link to={`/admin/organizer/detail/${organizerId}`} className='text-black flex items-center gap-2 mb-5'>
                <IoChevronBackOutline size={24} />
                <span>Back to Events</span>
            </Link>
            <h1 className="mb-5 text-2xl font-extrabold text-black mt-4">Tambah Event</h1>

            {loading && (
                <div className="flex items-center justify-center mb-4">
                    <span className="loader">Loading...</span>
                </div>
            )}
            <div className="grid lg:grid-cols-2 gap-9 text-black">
                <div className="card">
                    <Input label={"Judul"} type={"text"} name={"title"} title={"Masukan Event"} variant={'bg-slate-100'} value={formEvent.title} onChange={handleEvent} />
                    <div className='grid grid-cols-2 gap-4'>
                        <Input label={"Kuota"} type={"number"} name={"quota"} title={"Masukan Quota"} variant={'bg-slate-100'} value={String(formEvent.quota)} onChange={handleEvent} />
                        <Input label={"Harga"} type={"number"} name={"price"} title={"Masukan Harga"} variant={'bg-slate-100'} value={String(formEvent.price)} onChange={handleEvent} />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <Input label={"Waktu Mulai"} name={"startTime"} type={"time"} title={"Masukan Event"} variant={'bg-primary text-white'} value={formEvent.startTime} onChange={handleEvent} />
                        <Input label={"Waktu Selesai"} name={"finishTime"} type={"time"} title={"Masukan Event"} variant={'bg-primary text-white'} value={formEvent.finishTime} onChange={handleEvent} />
                    </div>
                    <Input label={"Tanggal"} name={"date"} type={"date"} title={"Masukan Tanggal"} variant={'bg-primary text-white'} value={formEvent.date.toISOString().split("T")[0]} onChange={handleEvent} />
                </div>

                <div className="card">
                    <span className="mt-3 mb-2">Gambar</span>
                    <div className="grid w-full items-center gap-1.5">
                        <input className="flex w-full rounded-lg border bg-slate-100 border-input text-md file:h-11 text-gray-400 file:border-0 file:bg-primary file:text-white file:text-md file:font-medium" type="file" id="picture" name="picture" onChange={handleFileChange} />
                    </div>
                    <div className='grid grid-cols-2 gap-4 mt-4'>
                        <div className="mt-2">
                            <span className="mt-3 mb-2">Status</span>
                            <select className="select bg-slate-100 w-full max-w-xs border-0" name="status" onChange={handleEvent} value={formEvent.status}>
                                <option disabled>Pilih Status Event:</option>
                                <option value="Active">Active</option>
                                <option value="No Active">No Active</option>
                            </select>
                        </div>
                        <div className="mt-2">
                            <span className="mt-3 mb-2">Kategori</span>
                            <select className="select bg-slate-100 w-full max-w-xs border-0" name="category" onChange={handleEvent} value={formEvent.category}>
                                <option disabled>Pilih Kategori:</option>
                                {datacategory && datacategory.map((category: any) => (
                                    <option key={category._id} value={category._id}>{category.name}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <span className="mt-3 mb-2">Alamat</span>
                    <textarea
                        placeholder="Masukan Alamat"
                        className="textarea textarea-bordered w-full bg-slate-100 border-0 resize-none h-36" name="address" value={formEvent.address} onChange={handleEvent}
                    />
                </div>
            </div>

            <div className='mt-5 text-black'>
                <h1> Deskripsi </h1>
                <TinyMCEEditor
                    apiKey='xu5tz2ib9tp0r3otmaybvtnhn1j0ngozghdb6bpueetbrico'
                    value={formEvent.description}
                    onEditorChange={handleEditorChange}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </div>

            <div className='justify-end flex'>
                <button type="submit" onClick={handleSubmit} disabled={loading} className='btn bg-secondary mt-3 border-0 hover:bg-cyan-700 text-white justify-end'>
                    {loading ? "Loading..." : <><AiFillPlusCircle size={18} /> Tambah Event</>}
                </button>
            </div>
        </div>
    );
};
