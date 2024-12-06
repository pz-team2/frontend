/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";
import TicketCounter from "../components/TicketCounter";
import CardDetail from "../components/CardDetail";
import { useParams } from "react-router-dom";
import api from "../../services/api";

interface EventProps {
  id: string;
  _id: string;
  title: string;
  description: string;
  address: string;
  date: Date;
  quota: number;
  ticketType: string;
  price: number;
  picture?: string;
  category?: string;
}

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/events/detail/${id}`);
        const eventData = response.data;

        if (eventData?.success && eventData.data) {
          const formattedEvent = {
            ...eventData.data,
            date: new Date(eventData.data.date),
            picture: eventData.data.picture
              ? `http://localhost:3500/${eventData.data.picture}`
              : "Banner",
          };

          setEvent(formattedEvent);
        } else {
          setError("Event not found.");
        }
      } catch (error) {
        setError("Error fetching event details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetail();
  }, [id]);

  if (loading) {
    return <div>Loading event details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div>Event not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col space-y-6 max-w-[1338px] mt-10 mx-auto pb-8 px-4 md:px-14">
        <img
          src={event.picture || "Banner"}
          alt="banner"
          className="w-full h-[331px] object-cover rounded-2xl shadow-md"
        />
        <div className="space-y-4">
          <h2 className="text-primary text-4xl font-bold">{event.title}</h2>
          <div className="pb-4 border-b-4 border-gray-200">
            <div className="flex flex-col md:flex-row gap-2 lg:gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <IoIosCalendar className="text-gray-500 flex-shrink-0" size={20} />
                <span className="text-base">{event.date.toLocaleDateString("id-ID")}</span>
              </div>
              <div className="flex items-start gap-2">
                <FaLocationDot className="text-gray-500 flex-shrink-0" size={20} />
                <span className="text-base">{event.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center">Tentang Event</h3>
          <CardDetail
            title={event.title}
            description={event.description}
            address={event.address}
            date={event.date}
          />
        </div>

        <TicketCounter price={event.price} quota={event.quota} eventId={event._id} />
      </div>
    </div>
  );
};


export default EventDetail;
