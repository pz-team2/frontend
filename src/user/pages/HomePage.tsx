import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import api from "../../services/api";

interface EventCategory {
  _id: string;
  name: string;
}

interface EventProps {
  _id: string;
  title: string;
  date: string;
  address: string;
  price: number;
  category: EventCategory | null;
  picture: string;
}

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>([]);
  const [categories, setCategories] = useState<EventCategory[]>([]); // Menyimpan daftar kategori

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventResponse = await api.get<{ success: boolean; data: EventProps[] }>("/events/list");
        const { data, success } = eventResponse.data;
        
        if (success && data) {
          const formattedEvents = data.map((event) => ({
            ...event,
            date: new Date(event.date).toISOString(),
            picture: `http://localhost:3500/${event.picture}`,
          }));
          setEvents(formattedEvents);
          setFilteredEvents(formattedEvents);
        } else {
          console.error("Unexpected data structure", eventResponse.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const categoryResponse = await api.get<{ success: boolean; data: EventCategory[] }>("/categories");
        const { data, success } = categoryResponse.data;
        
        if (success && data) {
          setCategories(data);
        } else {
          console.error("Error fetching categories:", categoryResponse.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchEvents();
    fetchCategories();
  }, []);

  const handleSearch = (query: string, category: string) => {
    let filtered = events;
    if (query !== "") {
      filtered = filtered.filter((event) => {
        const eventCategory = event.category?.name || "Tidak Ada Kategori";
        return (
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          eventCategory.toLowerCase().includes(query.toLowerCase())
        );
      });
    }

    if (category !== "") {
      filtered = filtered.filter((event) => event.category?.name === category);
    }

    setFilteredEvents(filtered);
  };

  const latestEvents = events
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <div className="bg-white flex flex-col">
      <ImageSlider />
      <Search onSearch={handleSearch} categories={categories} />
      <section className="flex flex-col max-w-[1114px] text-left mx-6 justify-center space-y-8 md:mx-auto">
        <h2 className="text-black text-2xl font-bold">Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {latestEvents.length > 0 ? (
            latestEvents.map((event) => (
              <Card
                key={event._id}
                _id={event._id}
                title={event.title}
                date={new Date(event.date)}
                address={event.address}
                price={event.price}
                category={event.category?.name || "Tidak Ada Kategori"}
                picture={event.picture}
                width="500px"
              />
            ))
          ) : (
            <p>No events found</p>
          )}
        </div>
        
        <h2 className="text-black text-2xl font-bold">Event</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Card
                key={event._id}
                _id={event._id}
                title={event.title}
                date={new Date(event.date)}
                address={event.address}
                price={event.price}
                category={event.category?.name || "Tidak Ada Kategori"}
                picture={event.picture}
              />
            ))
          ) : (
            <p>No events found</p>
          )}
        </div>
        <div className="mx-auto">
          <Link to="/selengkapnya">
            <button className="btn btn-wide bg-primary text-white mx-auto">
              SELENGKAPNYA
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
