
import { FaCirclePlus } from "react-icons/fa6";

export const TambahOrganizer = () => {
    return (
        <div>
            <button className="btn mb-4 border-0 text-white bg-secondary hover:bg-cyan-900" onClick={() => { const modal = document.getElementById('my_modal_1') as HTMLDialogElement; if (modal) { modal.showModal(); } }}><FaCirclePlus /> Tambah Event</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg text-black text-center"> Tambah Data</h3>
                    <div className="card">
                        <span className="text-black mt-3 mb-2">Username</span>
                        <input type="text" placeholder="Masukan Username" className="input input-bordered w-full  bg-white border-gray-400 focus:text-black" />
                        <span className="text-black mt-3 mb-2">Email</span>
                        <input type="text" placeholder="Masukan Email" className="input input-bordered w-full bg-white border-gray-400 focus:text-black" />
                        <span className="text-black mt-3 mb-2">Nama Organizer</span>
                        <input type="text" placeholder="Masukan Organizer" className="input input-bordered w-full bg-white border-gray-400 focus:text-black" />
                        <span className="text-black mt-3 mb-2">No Handphone</span>
                        <input type="text" placeholder="Masukan No Handphone" className="input input-bordered w-full bg-white border-gray-400 focus:text-black" />
                        <span className="text-black mt-3 mb-2">Password</span>
                        <input type="text" placeholder="Masukan Password" className="input input-bordered w-full bg-white border-gray-400 focus:text-black" />
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