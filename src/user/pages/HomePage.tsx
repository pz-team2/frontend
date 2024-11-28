/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import logo from "../../assets/img/goevent-w.png";
import Search from "../components/Search";
import api from "../../services/api";

interface CardProps {
  _id: string; 
  title: string;
  date: Date;
  address: string;
  price: number;
  category: string;
  picture: string;
}

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<CardProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get("/events/list");
        const eventsData = response.data;

        if (eventsData?.success && eventsData.data) {
          const formattedEvents = eventsData.data.map((event: any) => ({
            ...event,
            date: new Date(event.date),
            picture: `http://localhost:3500/${event.picture}`,
          }));

          setEvents(formattedEvents);
        } else {
          console.error("Unexpected data structure", eventsData);
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white flex flex-col">
      <Navbar />
      <ImageSlider />
      <Search />
      <section className="flex flex-col max-w-[1114px] text-left mx-6 justify-center space-y-8 md:mx-auto">
        <h2 className="text-black text-2xl font-bold">Unggulan</h2>
        <h2 className="text-black text-2xl font-bold">Sedang Tayang</h2>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {events.length > 0 ? (
            events.map((event) => <Card key={event._id} {...event} />) // Change _id to id
          ) : (
            <p>Loading ongoing events...</p>
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

export default HomePage;
