import { useEffect, useState } from 'react';
import api from '../../services/api';
import React from 'react'
import { format } from 'date-fns';
import { Button } from '../../components/Button';
const PICTURE = import.meta.env.VITE_API_URL_PICTURE
export const Event = () => {
  const [events, setEvents] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await api.get('organizers/event');
      setEvents(response.data.data.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black">My Event</h1>
      {events.length === 0 ? (
        <h1 className="mb-5 text-2xl font-extrabold mt-4 text-black">Loading ...</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {events.map((event) => (
            <div key={event._id} className="card w-full card-compact bg-base-100 shadow-xl mt-3">
              <figure>
                <img src={`${PICTURE}${event.picture}`} alt={event.title} />
              </figure>
              <div className="card-body bg-white rounded-b-2xl">
                <h2 className="card-title text-black">{event.title}</h2>
                <p>{format(new Date(event.date), 'd MMMM yyyy')}</p>
                <p>{event._id}</p>
                <div className="card-actions justify-start mt-3">
                  <Button
                    to={`/organizer/event/detail/${event._id}`}
                    variant="btn bg-secondary hover:bg-cyan-600 border-0 text-white text-lg font-bold"
                  >
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
