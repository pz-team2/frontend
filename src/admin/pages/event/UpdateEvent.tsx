
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AiFillPlusCircle } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Input } from '../../../components/Fragments/Input';

export const UpdateEvent = () => {
    return (
        <div>
            <Link to='/admin/organizer/detail' className='text-black flex items-center gap-2 mb-5'>
                <IoChevronBackOutline size={24} />
                <span>Back to Events</span>
            </Link>
            <h1 className="mb-5 text-2xl font-extrabold text-black mt-4"> Update Event</h1>
            <div className="grid lg:grid-cols-2 gap-9 text-black">
                <div className="card">
                    <Input label={"Judul"} type={"text"} name={"judul"} title={"Masukan Event"} variant={'bg-slate-100'} />
                    <Input label={"Kuota"} type={"text"} name={"kuota"} title={"Masukan Event"} variant={'bg-slate-100'} />
                    <Input label={"Harga"} type={"text"} name={"harga"} title={"Masukan Event"} variant={'bg-slate-100'} />
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="flex flex-col">
                            <Input label={"Waktu Mulai"} name={"waktu-mulai"} type={"time"} title={"Masukan Event"} variant={'bg-primary text-white'} />
                        </div>
                        <div className="flex flex-col">
                            <Input label={"Waktu Mulai"} name={"waktu-mulai"} type={"time"} title={"Masukan Event"} variant={'bg-primary text-white'} />
                        </div>
                    </div>
                    <span className="mt-3 mb-2">Tanggal</span>
                    <Input label={"Tanggal"} name={"waktu-mulai"} type={"date"} title={"Masukan Event"} variant={'bg-primary text-white'} />
                </div>

                <div className="card">
                    <span className="mt-3 mb-2">Gambar</span>
                    <div className="grid w-full items-center gap-1.5">
                        <input className="flex w-full rounded-lg border bg-slate-100 border-input text-md file:h-11 text-gray-400 file:border-0 file:bg-primary file:text-white file:text-md file:font-medium" type="file" id="picture" />
                    </div>
                    <span className="mt-3 mb-2">Status</span>
                    <select className="select bg-slate-100 w-full max-w-xs border-0">
                        <option disabled selected>Pilih Status Event:</option>
                        <option>Active</option>
                        <option>No Active</option>
                    </select>

                    <span className="mt-3 mb-2">Kategori</span>
                    <select className="select bg-slate-100 w-full max-w-xs border-0">
                        <option disabled selected>Pilih Kategori:</option>
                        <option>Music - Cosplay</option>
                        <option>Music - Pop</option>
                    </select>

                    <span className="mt-3 mb-2">Alamat</span>
                    <textarea
                        placeholder="Masukan Alamat"
                        className="textarea textarea-bordered w-full bg-slate-100 border-0 resize-none h-36"
                    />
                </div>
            </div>

            <div className='mt-5 text-black'>
                <h1> Deskripsi </h1>
                <CKEditor
                    editor={ClassicEditor}
                // Uncomment lines below if you want to capture editor data
                // onChange={(event, editor) => {
                //     const data = editor.getData();
                // }}
                />
            </div>
            <div className='justify-end flex'>
                <button type="submit" className='btn bg-secondary mt-3 border-0 hover:bg-cyan-700 text-white justify-end'> <AiFillPlusCircle size={18} /> Update  Event </button>
            </div>
        </div>
    )
}
