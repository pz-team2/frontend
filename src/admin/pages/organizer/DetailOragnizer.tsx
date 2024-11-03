import { FaCirclePlus } from "react-icons/fa6";
import { Search } from "../../../components/Layout/Search";
import { Button } from "../../../components/Fragments/Button";
import { CardEvent } from "../../../components/Layout/CardEvent";
import { CardProfile } from "../../../components/Layout/CardProfile";


const DetailOrganizer = () => {
  return (
    <>
      <div>
        <h1 className="mb-5 text-2xl font-extrabold text-black">Detail Organizer</h1>
        <CardProfile username="nadia" namaOrganizer="festival" email="event@gmail.com" no="0812975433"/>
        <div className="flex flex-col sm:flex-row mt-5 gap-3 sm:gap-5">
          <Button to="/admin/organizer/event/detail" variant={`bg-secondary  text-md p-3 `} icon={<FaCirclePlus />}> Tambah Event </Button>
          <div className="relative w-full sm:w-96">
            <Search />
          </div>
        </div>

        <h1 className="mt-6 mb-5 text-2xl font-extrabold text-black">Event</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <CardEvent gambar={'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'} judul={'Konser Festival'} tanggal={'31 Desember 2024'}/>
        </div>
      </div>
    </>
  )
}

export default DetailOrganizer;
