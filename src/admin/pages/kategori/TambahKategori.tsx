import { FaCirclePlus } from "react-icons/fa6";

export const TambahKategori = () => {
    return (
        <div>
            <button className="btn mb-4 border-0 text-white bg-secondary hover:bg-cyan-900" onClick={() => { const modal = document.getElementById('my_modal_1') as HTMLDialogElement; if (modal) { modal.showModal(); } }}><FaCirclePlus /> Tambah Event</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white">
                    <h3 className="font-bold text-lg text-black text-center"> Tambah Kategori Event</h3>
                    <div className="card">
                        <span className="text-black mt-3 mb-2">Judul</span>
                        <input type="text" placeholder="Masukan Username" className="input input-bordered w-full  bg-white border-gray-400 focus:text-black" />
                        <span className="text-black mt-3 mb-2">Keterangan</span>
                        <input type="text" placeholder="Masukan Email" className="input input-bordered w-full bg-white border-gray-400 focus:text-black" />
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
