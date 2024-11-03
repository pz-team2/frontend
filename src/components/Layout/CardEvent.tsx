import { Button } from "../Fragments/Button"

interface cardProps {
    gambar?: string;
    judul: string;
    tanggal: string;
}

export const CardEvent:React.FC<cardProps> = ({gambar,  judul, tanggal}) => {

    return (
        <div>
            <div className="card card-side flex-col bg-white shadow-xl rounded-2xl sm:flex-col lg:flex-row md:flex-row">
                <img src={gambar} alt="Event" className="w-max-full lg:w-36 md:w-36 24 rounded-m-2xl md:rounded-s-2xl" />
                <div className="card-body">
                    <h2 className="card-title text-black text-md">{judul}</h2>
                    <p className="text-sm">{tanggal}024</p>
                    <div className="card-actions justify-start flex flex-row">
                        <Button to="/admin/organizer/event/detail" variant="bg-secondary">Detail</Button>
                        <Button to="/admin/organizer/event/update" variant="bg-secondary">Update</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

