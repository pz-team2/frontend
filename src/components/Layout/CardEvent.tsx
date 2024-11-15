import { Button } from "../Fragments/Button"
import { MdDeleteForever } from "react-icons/md";
import { MdEditDocument } from "react-icons/md";
import { BiSolidDetail } from "react-icons/bi";

interface cardProps {
    gambar?: string;
    title?: string;
    date?: React.ReactNode
    onclick: () => void;
    id?: string
}

export const CardEvent: React.FC<cardProps> = ({ gambar, title, date, id, onclick }) => {

    return (
        <div>
            <div className="card card-side flex-col bg-white shadow-xl rounded-2xl sm:flex-col lg:flex-row md:flex-row">
                <img src={gambar} alt="Event" className="w-max-full lg:w-40 md:w-36 24 rounded-m-2xl md:rounded-s-2xl" />
                <div className="card-body">
                    <h2 className="card-title text-black text-md">{title}</h2>
                    <p className="text-sm ">{date}</p>
                    <div className="card-actions justify-start flex flex-row">
                        <Button to={`/admin/organizer/event/update/${id}`} variant="bg-secondary"><MdEditDocument size={18} /></Button>
                        <Button variant="bg-red-400"><MdDeleteForever size={18} onClick={onclick} /></Button>
                        <Button to={`/admin/organizer/event/detail/${id}`} variant="bg-secondary"><BiSolidDetail size={18} /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

