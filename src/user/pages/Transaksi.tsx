import Navbar from "../components/Navbar";
import banner from "../../assets/img/banner.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCalendar } from "react-icons/io";
import TicketCounter from "../components/TicketCounter";
import CardDetail from "../components/CardDetail";
import { useParams } from "react-router-dom";

const eventsData = [
  {
    id: "1",
    title: "Konser Cosmyc Fest",
    description:
      "IMWE (Imagene Week of Himakom) merupakan rangkaian acara tahunan yang diadakan oleh Program Studi Ilmu Komputer Universitas Lambung Mangkurat (ULM) dalam rangka memperingati HUT HIMAKOM.",
    location: "GOR Rudy Resnawan Jl. Trikora, Guntungmanggis, Kec. Landasan Ulin, Kota Banjar Baru, Kalimantan Selatan",
    date: new Date("2024-12-21"),
    lineup: ["Juicy Lucy", "Widiya Angela", "RCKA"],
    ticketType: "Presale 1",
    price: 50000
  },
  {
    id: "2",
    title: "Art Exhibition",
    description:
      "Sebuah pameran seni yang menampilkan karya-karya seniman kontemporer dari berbagai disiplin seni.",
    location: "Jakarta",
    date: new Date("2024-11-30"),
    lineup: ["Seniman A", "Seniman B", "Seniman C"],
    ticketType: "General Admission",
    price: 100000,
    picture: banner,
    category: "Art",
  },
  {
    id: "3",
    title: "Tech Conference",
    description:
      "Konferensi teknologi untuk membahas perkembangan terbaru dalam dunia teknologi dan inovasi.",
    location: "Bandung",
    date: new Date("2024-12-10"),
    lineup: ["Pembicara A", "Pembicara B", "Pembicara C"],
    ticketType: "VIP",
    price: 75000,
    picture: banner,
    category: "Technology"
  }
];

const Transaksi = () => {
  // Extract event id from the URL
  const { id } = useParams<{ id: string }>();

  // Find the event by id
  const event = eventsData.find(event => event.id === id);

  if (!event) {
    return <div>Event tidak ditemukan.</div>; // If event not found
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col space-y-6 max-w-[1338px] mt-10 mx-auto pb-8 px-4 md:px-14  ">
        <img
          src={banner}
          alt="banner"
          className="w-full h-[331px] object-cover rounded-2xl shadow-md"
        />

        <div className="space-y-4">
          <h2 className="text-primary text-4xl font-bold">{event.title}</h2>
          <div className="pb-4 border-b-4 border-gray-200 ">
            <div className="flex flex-col md:flex-row gap-2 lg:gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <IoIosCalendar className="text-gray-500 flex-shrink-0" size={20} />
                <span className="text-base">
                  {event.date.toLocaleDateString("id-ID")}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <FaLocationDot className="text-gray-500 flex-shrink-0" size={20} />
                <span className="text-base">{event.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full">
          <h3 className="text-2xl font-semibold text-primary mb-4 text-center">
            Tentang Event
          </h3>
          <CardDetail
            title={event.title}
            description={event.description}
            location={event.location}
            date={event.date}
            lineup={event.lineup}
          />
        </div>
        <TicketCounter ticketType={event.ticketType} price={event.price} />
      </div>
    </div>
  );
};

export default Transaksi;
