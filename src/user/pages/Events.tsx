import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import CardUnggulan from "../components/CardUnggulan";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import logo from "../../assets/img/goevent-w.png";
import Search from "../components/Search";
import banner from "../../assets/img/banner.png";

const Events = () => {
const featuredEvents = [
  {
    id: "1",
    title: "Konser Cosmyc Fest",
    description:
      "IMWE (Imagene Week of Himakom) merupakan rangkaian acara tahunan yang diadakan oleh Program Studi Ilmu Komputer Universitas Lambung Mangkurat (ULM) dalam rangka memperingati HUT HIMAKOM.",
    address: "Kota Banjar Baru",
    date: new Date("2024-12-21"),
    lineup: ["Juicy Lucy", "Widiya Angela", "RCKA"],
    ticketType: "Presale 1",
    price: 50000,
    picture: banner,
    category : "Music",
  },
  {
    id: "2",
    title: "Art Exhibition",
    description:
      "Sebuah pameran seni yang menampilkan karya-karya seniman kontemporer dari berbagai disiplin seni.",
    address: "Jakarta",
    date: new Date("2024-11-30"),
    lineup: ["Seniman A", "Seniman B", "Seniman C"],
    ticketType: "General Admission",
    price: 100000,
    picture: banner,
    category : "Art",
  },
];

const ongoingEvents = [
  {
    id: "1",
    title: "Konser Cosmyc Fest",
    description:
      "IMWE (Imagene Week of Himakom) merupakan rangkaian acara tahunan yang diadakan oleh Program Studi Ilmu Komputer Universitas Lambung Mangkurat (ULM) dalam rangka memperingati HUT HIMAKOM.",
    address: "Kota Banjar Baru",
    date: new Date("2024-12-21"),
    lineup: ["Juicy Lucy", "Widiya Angela", "RCKA"],
    ticketType: "Presale 1",
    price: 50000,
    picture: banner,
    category : "Music",
  },
  {
    id: "2",
    title: "Art Exhibition",
    description:
      "Sebuah pameran seni yang menampilkan karya-karya seniman kontemporer dari berbagai disiplin seni.",
    address: "Jakarta",
    date: new Date("2024-11-30"),
    lineup: ["Seniman A", "Seniman B", "Seniman C"],
    ticketType: "General Admission",
    price: 100000,
    picture: banner,
    category : "Art",
  },
  {
    id: "3",
    title: "Tech Conference",
    description:
      "Konferensi teknologi untuk membahas perkembangan terbaru dalam dunia teknologi dan inovasi.",
    address: "Bandung",
    date: new Date("2024-12-10"),
    lineup: ["Pembicara A", "Pembicara B", "Pembicara C"],
    ticketType: "VIP",
    price: 75000,
    picture: banner,
    category : "Technology"
  }
];


  return (
    <div className="bg-white flex flex-col">
      <Navbar />
      <ImageSlider />
      <Search />
      <section className="flex flex-col max-w-[1114px] text-left mx-4 justify-center space-y-8 md:mx-auto">
        <h2 className="text-black text-2xl font-bold ml-10 md:ml-0">Unggulan</h2>
        <div className="flex flex-wrap items-center gap-5">
          {featuredEvents.map((event, index) => (
            <Link key={index} to={`/transaksi/${event.id}`}>
              <CardUnggulan {...event} />
            </Link>
          ))}
        </div>
        <h2 className="text-black text-2xl font-bold ml-10 md:ml-0">Sedang Tayang</h2>
        <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12">
          {ongoingEvents.map((event, index) => (
            <Link key={index} to={`/transaksi/${event.id}`}>
              <Card {...event} />
            </Link>
          ))}
        </div>
        <div className="mx-auto">
          <Link to="/selengkapnya">
            <button className="btn btn-wide bg-primary text-white mx-auto">SELENGKAPNYA</button>
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

export default Events;
