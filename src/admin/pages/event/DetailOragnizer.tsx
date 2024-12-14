import React from 'react'
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { FaCirclePlus } from "react-icons/fa6";
import { Search } from "../../../components/Search";
import { Button } from "../../../components/Button";
import { CardEvent } from "../../../components/CardEvent";
import { getOrganizerByIdApi, IOrganizer } from "../../../Redux/features/organizer/organizerApi";
import { CardProfile } from "../../../components/CardProfile";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { deleteEventById, getEventsByOrganizer } from "../../../Redux/features/events-redux/EventSlice";
import { RootState } from "../../../Redux/store";
import { IoChevronBackOutline } from "react-icons/io5";
import { format } from 'date-fns';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const PICTURE = import.meta.env.VITE_API_URL_PICTURE
const DetailOrganizer = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const [organizer, setOrganizer] = useState<IOrganizer | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);

  const { events, loading: eventsLoading, pagination } = useAppSelector(
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
      fetchEvents(1);
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
      fetchEvents(pagination.page);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      const filtered = events.filter((event) =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filter event berdasarkan judul
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  };

  useEffect(() => {
    setFilteredEvents(events);
  }, [events]);

  if (loading) return <div>Loading organizer...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      <Link to={`/admin/organizer`} className='text-black flex items-center gap-2 mb-5'>
        <IoChevronBackOutline size={24} />
        <span>Back to Organizer</span>
      </Link>
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
          <Search
            value={searchQuery}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        </div>
      </div>

      <h1 className="mt-6 mb-5 text-2xl font-extrabold text-black">Event</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {eventsLoading ? (
          <div>Loading events...</div>
        ) : filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <CardEvent
              key={event._id}
              gambar={`${PICTURE}${event.picture}`}
              title={event.title}
              date={format(new Date(event.date), "d MMMM yyyy")}
              id={event._id}
              onclick={() => deleteEvent(event._id)}
            />
          ))
        ) : (
          <div>Tidak Ada Event Yang di Temukan.</div>
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
