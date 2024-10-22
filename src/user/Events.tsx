import Navbar from "./components/Navbar";
import Search from "./components/Search";
import ImageSlider from "./components/ImageSlider";
import Card from "./components/Card";

const Events = () => {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <ImageSlider />
        <Search />
        <section className="flex flex-wrap justify-center m-10 gap-10">
          <Card />
          <Card />
          <Card />
        </section>
      </div>
    </>
  );
};

export default Events;
