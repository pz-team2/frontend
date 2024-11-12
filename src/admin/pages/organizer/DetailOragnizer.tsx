/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getOrganizerByIdApi, IOrganizer } from "../../../Redux/features/organizer/organizerApi";
import { FaCirclePlus } from "react-icons/fa6";
import { Search } from "../../../components/Layout/Search";
import { Button } from "../../../components/Fragments/Button";
import { CardEvent } from "../../../components/Layout/CardEvent";
import { CardProfile } from "../../../components/Layout/CardProfile";

const DetailOrganizer = () => {
  const { id } = useParams<{ id: string }>(); 
  const [organizer, setOrganizer] = useState<IOrganizer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Memoize fetchOrganizerDetail using useCallback to avoid unnecessary re-creation
  const fetchOrganizerDetail = useCallback(async () => {
    if (!id) {
      setError("ID tidak ditemukan");
      return;
    }

    setLoading(true);
    setError('');
    try {
      const data = await getOrganizerByIdApi(id);  // Fetch data from the API
      if (data.success) {
        setOrganizer(data.data); 
      } else {
        setError(data.message || 'Gagal mengambil data organizer');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mengambil data.');
    } finally {
      setLoading(false);
    }
  }, [id]);  

  useEffect(() => {
    if (id) {
      fetchOrganizerDetail();  
    }
  }, [id, fetchOrganizerDetail]);  

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <>
      <div>
        <h1 className="mb-5 text-2xl font-extrabold text-black">Detail Organizer</h1>
        {organizer ? (
          <CardProfile
            username={organizer.username}
            namaOrganizer={organizer.organizerName}
            email={organizer.email}
            no={organizer.phoneNumber}
          />
        ) : (
          <div>Organizer tidak ditemukan.</div>
        )}
        
        <div className="flex flex-col sm:flex-row mt-5 gap-3 sm:gap-5">
          <Button 
            to="/admin/organizer/event/detail" 
            variant={`bg-secondary text-md p-3`} 
            icon={<FaCirclePlus />}
          >
            Tambah Event
          </Button>
          
          <div className="relative w-full sm:w-96">
            <Search />
          </div>
        </div>

        <h1 className="mt-6 mb-5 text-2xl font-extrabold text-black">Event</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <CardEvent 
            gambar={'https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp'} 
            judul={'Konser Festival'} 
            tanggal={'31 Desember 2024'}
          />
        </div>
      </div>
    </>
  );
};

export default DetailOrganizer;
