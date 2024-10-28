import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import CardUnggulan from "../components/CardUnggulan";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import logo from "../../assets/img/goevent-w.png";
import Search from "../components/Search";

const Events = () => {
  return (
    <>
      <div className="bg-white flex flex-col">
        <Navbar />
        <ImageSlider />
        <Search />
        <section className="flex flex-col  max-w-[1114px] text-left mx-auto justify-center space-y-8">
          <h2 className="text-black text-2xl font-bold ml-10 md:ml-0">
            Unggulan
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <CardUnggulan />
            <CardUnggulan />
          </div>
          <h2 className="text-black text-2xl font-bold ml-10 md:ml-0">
            Sedang Tayang
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-12">
            <Card />
            <Card />
            <Card />
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
    </>
  );
};

export default Events;
