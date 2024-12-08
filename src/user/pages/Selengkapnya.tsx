import React, { useEffect, useState } from "react";
import Card from "../components/Card";
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
  address: string;
  date: Date;
  quota: number;
  price: number;
  picture: string;
  category: EventCategory | null;
}

const Selengkapnya: React.FC = () => {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventProps[]>([]);
  const [categories, setCategories] = useState<EventCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventsAndCategories = async () => {
      try {
        // Fetch events
        const eventResponse = await api.get<{ success: boolean; data: EventProps[] }>("/events/list");
        const { data: eventData, success } = eventResponse.data;

        if (success && eventData) {
          const formattedEvents = eventData.map((event: EventProps) => ({
            _id: event._id,
            title: event.title,
            address: event.address,
            quota: event.quota,
            date: new Date(event.date),
            price: event.price,
            picture: `${PICTURE}${event.picture}`,
            category: event.category || null,
          }));

          setEvents(formattedEvents);
          setFilteredEvents(formattedEvents);
        }

        // Fetch categories
        const categoryResponse = await api.get<{ success: boolean; data: EventCategory[] }>("/categories");
        const { data: categoryData, success: categorySuccess } = categoryResponse.data;

        if (categorySuccess && categoryData) {
          setCategories(categoryData);
        }
      } catch (error) {
        console.error("Error fetching events or categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEventsAndCategories();
  }, []);

  const handleSearch = (query: string, category: string) => {
    let filtered = events;

    if (query) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(query.toLowerCase()) ||
          (event.category?.name || "Tidak Ada Kategori")
            .toLowerCase()
            .includes(query.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter(
        (event) => event.category?.name === category
      );
    }

    setFilteredEvents(filtered);
  };

  return (
    <div className="bg-white flex flex-col">
      <Search onSearch={handleSearch} categories={categories} />
      <section className="flex flex-col max-w-[1114px] text-left mx-6 justify-center space-y-8 md:mx-auto">
        <h2 className="text-black text-2xl font-bold ml-10 md:ml-0">Semua Event</h2>
        {loading ? (
          <p className="text-center">Loading events...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <Card
                  key={event._id}
                  _id={event._id}
                  quota={event.quota}
                  title={event.title}
                  address={event.address}
                  date={new Date(event.date)}
                  price={event.price}
                  category={event.category?.name || "Tidak Ada Kategori"}
                  picture={event.picture}
                />
              ))
            ) : (
              <p>No events found</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Selengkapnya;
