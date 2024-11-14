import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner from '../../assets/img/banner.png';
import 'swiper/css';
import 'swiper/css/navigation';

interface Image {
  id: number;
  url: string;
  alt: string;
}

const ImageSlider: React.FC = () => {
  const images: Image[] = [
    { id: 1, url: banner, alt: 'Event Banner 1' },
    { id: 2, url: banner, alt: 'Event Banner 2' },
    { id: 3, url: banner, alt: 'Event Banner 3' },
    { id: 4, url: banner, alt: 'Event Banner 4' },
  ];

  return (
    <div className="relative w-full py-4 lg:py-10">
      <div className="w-full mx-auto relative">
        {/* Navigation Buttons - Hidden on mobile */}
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
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
          breakpoints={{
            // Mobile first approach
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // Tablet
            768: {
              slidesPerView: 'auto',
              spaceBetween: 20,
            },
            // Desktop
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="w-full"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className="w-auto">
              <div className="relative px-4 md:px-0">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full md:w-[768px] lg:w-[992px] h-[150px] md:h-[200px] lg:h-[248px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;