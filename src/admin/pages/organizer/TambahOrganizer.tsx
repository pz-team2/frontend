
import { FaCirclePlus } from "react-icons/fa6";
import { Input } from "../../../components/Fragments/Input";

export const TambahOrganizer = () => {
    return (
        <div>
            <button className="btn mb-4 border-0 text-white bg-secondary hover:bg-cyan-900" onClick={() => { const modal = document.getElementById('my_modal_1') as HTMLDialogElement; if (modal) { modal.showModal(); } }}><FaCirclePlus /> Tambah Event</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg text-black text-center"> Tambah Data</h3>
                    <div className="card text-black">
                        <Input label={"Username"} type={"text"} name={"judul"} title={"Masukan Event"} variant={'bg-slate-100'} />
                        <Input label={"Email"} type={"text"} name={"judul"} title={"Masukan Event"} variant={'bg-slate-100'} />
                        <Input label={"Nama Organizer"} type={"text"} name={"judul"} title={"Masukan Event"} variant={'bg-slate-100'} />
                        <Input label={"No Handphone"} type={"text"} name={"judul"} title={"Masukan Event"} variant={'bg-slate-100'} />
                        <Input label={"Password"} type={"text"} name={"judul"} title={"Masukan Event"} variant={'bg-slate-100'} />
                    </div>
                    <div className="modal-action">
                        <button className="btn text-white bg-primary hover:bg-blue-950" onClick={() => {
                            const modal = document.getElementById('my_modal_1') as HTMLDialogElement;
                            if (modal) {
                                modal.close();
                            }
                        }}>Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
