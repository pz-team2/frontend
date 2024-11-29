import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import logo from "../../assets/img/goevent-w.png";
import Search from "../components/Search";
import api from "../../services/api";

interface EventProps {
  _id: string;
  title: string;
  description: string;
  address: string;
  date: Date;
  price: number;
  picture: string;
  category: string;
}

const Selengkapnya: React.FC = () => {
  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events/list");
        const eventsData = response.data;

        if (eventsData?.success && eventsData.data) {
          const formattedEvents = eventsData.data.map((event: EventProps) => ({
            _id: event._id,
            title: event.title,
            description: event.description,
            address: event.address,
            date: new Date(event.date),
            price: event.price,
            picture: `http://localhost:3500/${event.picture}`,
            category: event.category,
          }));

          setEvents(formattedEvents);
        } else {
          console.error("Unexpected data structure", eventsData);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white flex flex-col">
      <Navbar />
      <Search />
      <section className="flex flex-col max-w-[1114px] text-left mx-auto justify-center space-y-8">
        <h2 className="text-black text-2xl font-bold ml-10 md:ml-0">Sedang Tayang</h2>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {events.length > 0 ? (
            events.map((event) => (
                <Card {...event} key={event._id}/>
            ))
          ) : (
            <p>Loading events...</p>
          )}
        </div>
      </section>
      <footer className="footer footer-center bg-primary text-base-content p-4 mt-6">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Selengkapnya;
