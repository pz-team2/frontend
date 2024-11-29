import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { Search } from "../../../components/Layout/Search";
import { Button } from "../../../components/Fragments/Button";
import { CardEvent } from "../../../components/Layout/CardEvent";
import { getOrganizerByIdApi, IOrganizer } from "../../../Redux/features/organizer/organizerApi";
import { CardProfile } from "../../../components/Layout/CardProfile";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { deleteEventById, getEventsByOrganizer } from "../../../Redux/features/event/eventSlice";
import { RootState } from "../../../Redux/store";
import { format } from 'date-fns';
import Swal from "sweetalert2";
import { getSearchEvant } from "../../../Redux/features/organizer/organizerSlice";

const DetailOrganizer = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const [organizer, setOrganizer] = useState<IOrganizer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { events, loading: eventsLoading, pagination } = useAppSelector(
    (state: RootState) => state.event
  );

  const { searchResults } = useAppSelector((state: RootState) => state.organizer);
  console.log(searchResults);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm && id) {
      dispatch(getSearchEvant(id)); // Kirim permintaan pencarian dengan ID organizer
    }
  };
  console.log(handleSearch)

  const fetchOrganizerDetail = useCallback(async () => {
    if (!id) {
      setError("ID tidak ditemukan");
      return;
    }

    setLoading(true);
    setError('');
    try {
      const data = await getOrganizerByIdApi(id);
      if (data.code === 200) {
        setOrganizer(data.data);
      } else {
        setError("Organizer tidak ditemukan");
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mengambil data.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  const fetchEvents = useCallback((page: number) => {
    if (id) {
      dispatch(getEventsByOrganizer({ organizerId: id, page }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      fetchOrganizerDetail();
    }
  }, [id, fetchOrganizerDetail]);

  useEffect(() => {
    if (organizer) {
      fetchEvents(1);  // Ambil data event untuk halaman pertama
    }
  }, [organizer, fetchEvents]);

  const handlePageChange = (page: number) => {
    fetchEvents(page);
  };

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
          <Search onSearch={handleSearch} />
        </div>
      </div>

      <h1 className="mt-6 mb-5 text-2xl font-extrabold text-black">Event</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {eventsLoading ? (
          <div>Loading events...</div>
        ) : searchResults.length > 0 ? (
          searchResults.map((event) => (
            <CardEvent
            key={event._id}
            gambar={`http://localhost:3500/${event.picture}`}
            title={event.title}
            date={format(new Date(event.date), "d MMMM yyyy")}
            id={event._id}
            onclick={() => deleteEvent(event._id)}
            />
          ))
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
