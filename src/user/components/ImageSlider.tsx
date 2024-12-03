import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

interface ImageSliderProps {
  images: string[]; 
  events: { _id: string; picture: string }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, events }) => {
  const initialSlide = Math.floor(images.length / 2);

  return (
    <div className="relative w-full py-4 lg:py-10">
      <div className="w-full mx-auto relative">
        <button
          className="custom-prev-button hidden md:flex absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/70 p-2 lg:p-4 rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 lg:h-8 lg:w-8 text-white" />
        </button>
        <button
          className="custom-next-button hidden md:flex absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/70 p-2 lg:p-4 rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 lg:h-8 lg:w-8 text-white" />
        </button>

        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true, 
          }}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          initialSlide={initialSlide}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="w-full"
        >
          {events.slice(0, 5).map((event, index) => (
            <SwiperSlide key={index} className="w-auto">
              <div className="relative px-4 md:px-0">
                <Link to={`/detail/${event._id}`}>
                  <img
                    src={event.picture}
                    alt={`Event Banner ${index + 1}`}
                    className="w-full md:w-[768px] lg:w-[992px] h-[150px] md:h-[200px] lg:h-[248px] object-cover rounded-xl shadow-lg"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
