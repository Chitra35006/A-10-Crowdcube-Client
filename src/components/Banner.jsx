import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import specific modules
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Slide } from "react-awesome-reveal";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/F6n014c/260912.jpg?text=Slide+1",
      title: '"We rise by lifting others. -Robert Ingersoll"',
    },
    {
      id: 2,
      image: "https://i.ibb.co/HhCMCvL/0-Ub-Hc-HRdlasgs-YRjx.jpg?text=Slide+1",
      title:
        '"Service to others is the rent you pay for your room here on earth. -Muhammad Ali"',
    },
    {
      id: 3,
      image: "https://i.ibb.co/rsR2TN1/web67.jpg?title=Slide+3",
      title: '"When you help others, you help yourself. -Aung San Suu Kyi"',
    },
    {
      id: 4,
      image: "https://i.ibb.co/9y6wJmw/1706674818278.jpg?title=Slide+4",
      title:
        '"Kindness is the language which the deaf can hear and the blind can see. -Mark Twain"',
    },
  ];

  return (
    <div style={{ width: "100%", margin: "auto", padding: "50px 10px" }}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ height: "500px" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ position: "relative" }}>
            <img
              src={slide.image}
              alt={slide.title}
              style={{
                width: "100%",
                borderRadius: "10px",
              }}
            />

            {/* Responsive Text Content */}
            <div
              className="
                   absolute 
                 sm:top-1/2 
                 sm:left-1/2 
                 top-24
                 left-40
                 transform 
                 -translate-x-1/2 
                 -translate-y-1/2 
                 text-white 
                 bg-black/60 
                 sm:p-6 
                 rounded 
                 text-center
                 font-bold 
              "
            >
              <Slide triggerOnce direction="right">
                <p className="text-xs sm:text-lg md:text-4xl mb-2 leading-tight">
                  Welcome to Crowd Cube. The more you give, the more you get.
                </p>
                <span className="text-cyan-200 text-[8px] sm:text-sm md:text-base">
                  {slide.title}
                </span>
              </Slide>
              ;
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
