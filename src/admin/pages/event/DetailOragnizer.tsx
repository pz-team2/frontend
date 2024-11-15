import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { Search } from "../../../components/Layout/Search";
import { Button } from "../../../components/Fragments/Button";
import { CardEvent } from "../../../components/Layout/CardEvent";
import { getOrganizerByIdApi, IOrganizer } from "../../../Redux/features/organizer/organizerApi";
import { CardProfile } from "../../../components/Layout/CardProfile";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { deleteEventById, getEventsByOrganizer } from "../../../Redux/features/event/eventSlice"; // Mengambil action untuk mendapatkan event
import { RootState } from "../../../Redux/store";
import { format } from 'date-fns';
import Swal from "sweetalert2";

const DetailOrganizer = () => {

  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const [organizer, setOrganizer] = useState<IOrganizer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { events, loading: eventsLoading, pagination, message, isEvent } = useAppSelector(
    (state: RootState) => state.event
  );

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

  const deleteEvent = async (eventId: string) => {
    const result = await Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Anda tidak dapat mengembalikan data yang dihapus!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Ya, hapus!',
    });

    if (result.isConfirmed) {
      dispatch(deleteEventById(eventId));
      Swal.fire('Terhapus!', 'Event telah dihapus.', 'success');
    }
  };

  useEffect(() => {
    if (isEvent) {
      fetchEvents(1); // Refresh event list after deletion
      navigate(`/admin/organizer/detail/${organizer?._id}`);
    }
  }, [isEvent, message, organizer, dispatch, navigate]);




  // Ambil data event berdasarkan organizerId
  const fetchEvents = (page: number) => {
    if (id) {
      dispatch(getEventsByOrganizer({ organizerId: id, page })); // Fetch event berdasarkan organizerId
    }
  };

  useEffect(() => {
    if (id) {
      fetchOrganizerDetail();
      fetchEvents(1); // Ambil data event untuk halaman pertama
    }
  }, [id, dispatch]);

  const handlePageChange = (page: number) => {
    fetchEvents(page); // Mengganti halaman event
  };


  // Handling loading and error states
  if (loading) return <div>Loading organizer...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
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
          to={`/admin/organizer/event/tambah/${organizer?._id}`}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {eventsLoading ? (
          <div>Loading events...</div>
        ) : events.length > 0 ? (
          events.map((event) => (
            <CardEvent
              key={event._id}
              gambar={`http://localhost:3500/${event.picture}`}
              title={event.title}
              date={format(new Date(event.date), "d MMMM yyyy")}
              id={event._id}
              onclick={() => deleteEvent(event._id)}
            />
          ))
        ) : (
          <div>No events found.</div>
        )}
      </div>

      <div className="mt-5 flex justify-center gap-4">
        <button
          onClick={() => handlePageChange(pagination.page - 1)}
          disabled={pagination.page <= 1}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Previous
        </button>
        <span>Page {pagination.page} of {pagination.lastPage}</span>
        <button
          onClick={() => handlePageChange(pagination.page + 1)}
          disabled={pagination.page >= pagination.lastPage}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DetailOrganizer;

{/* <div dangerouslySetInnerHTML={{ __html: event.description }} /> */ }