import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import api from "../../services/api";

const PICTURE = import.meta.env.VITE_API_URL_PICTURE

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
  quota: number;
  category: EventCategory | null;
  picture: string;
}

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>([]);
  const [categories, setCategories] = useState<EventCategory[]>([]);
  const [sliderImages, setSliderImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventResponse = await api.get<{ success: boolean; data: EventProps[] }>("/events/list");
        const { data, success } = eventResponse.data;

        if (success && data) {
          const formattedEvents = data.map((event) => ({
            ...event,
            date: new Date(event.date).toISOString(),
            picture: `${PICTURE}${event.picture}`,
          }));
          setEvents(formattedEvents);
          setFilteredEvents(formattedEvents);

          // Ambil hanya gambar dari event yang akan datang
          const upcomingEventImages = formattedEvents
            .filter(
              (event) => new Date(event.date).getTime() > Date.now()
            )
            .slice(0, 5) 
            .map((event) => event.picture);
          setSliderImages(upcomingEventImages); 
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

  const upcomingEvents = events
    .filter(event => new Date(event.date) > new Date()) // Hanya menampilkan event yang belum lewat
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) // Urutkan berdasarkan waktu
    .slice(0, 2); // Ambil 2 event terdekat

  return (
    <div className="bg-white flex flex-col">
      {/* Kirim data sliderImages dan events ke komponen ImageSlider */}
      <ImageSlider images={sliderImages} events={events} />
      <section className="flex flex-col max-w-[1114px] text-left mt-4 mx-6 justify-center space-y-8 md:mx-auto">
        <h2 className="text-black text-2xl font-bold">Event Mendatang</h2>
        <div className="grid grid-cols-1 pb-8 sm:grid-cols-2 gap-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <Card
                key={event._id}
                _id={event._id}
                title={event.title}
                quota={event.quota}
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
        <Search onSearch={handleSearch} categories={categories} />
        <h2 className="text-black text-2xl font-bold">Event</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Card
                key={event._id}
                _id={event._id}
                title={event.title}
                date={new Date(event.date)}
                quota={event.quota}
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
