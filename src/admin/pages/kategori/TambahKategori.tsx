// import { useEffect } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { Input } from "../../../components/Fragments/Input";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { setName, setDescription, cetegorytambah, setMessage } from '../../../Redux/features/category/categorySlice';
import { LuBadgeCheck } from "react-icons/lu";

export const TambahKategori: React.FC = () => {
    const dispatch = useAppDispatch();
    const { name, description, message } = useAppSelector((state) => state.category);

    const handleAddCategory = (e: React.FormEvent) => {
        e.preventDefault();
        const response = dispatch(cetegorytambah({ name, description }));
        console.log(response);
    };
    
    const handleCloseModal = () => {
        dispatch(setName(''));
        dispatch(setDescription(''));
        dispatch(setMessage(''));
        window.location.reload();
        (document.getElementById('my_modal_1') as HTMLDialogElement)?.close();
    };

    const openModal = () => {
        dispatch(setName(''));
        dispatch(setDescription(''));
        dispatch(setMessage(''));
        (document.getElementById('my_modal_1') as HTMLDialogElement)?.showModal();
    };

    return (
        <div>
            <button
                className="btn mb-4 border-0 text-white bg-secondary hover:bg-cyan-900"
                onClick={openModal}
            >
                <FaCirclePlus /> Tambah Kategori
            </button>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box bg-white" onSubmit={handleAddCategory}>
                    <h3 className="font-bold text-lg text-black text-center">Tambah Kategori Event</h3>
                    <div className="card text-black">
                        {message && (
                            <div role="alert" className="alert bg-red-200 text-black mt-5 border-0">
                                <LuBadgeCheck /> <span>{message}</span>
                            </div>
                        )}
                        <Input
                            label={"Name"}
                            type={"text"}
                            name={"judul"}
                            value={name}
                            onChange={(e) => dispatch(setName(e.target.value))}
                            title={"Masukan Name"}
                            variant={'bg-slate-100'}
                        />
                        <Input
                            label={"Keterangan"}
                            type={"text"}
                            name={"keterangan"}
                            value={description}
                            onChange={(e) => dispatch(setDescription(e.target.value))}
                            title={"Masukan Keterangan"}
                            variant={'bg-slate-100'}
                        />
                    </div>
                    <div className="modal-action">
                        <button type="submit" className="btn bg-secondary text-white border-0">Tambah Data</button>
                        <button
                            type="button"
                            className="btn text-white bg-primary hover:bg-blue-950"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};
