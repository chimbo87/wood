import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner01 from "../../assets/wood03.jpeg";
import banner02 from "../../assets/wood06.jpeg";
import banner03 from "../../assets/wood07.jpeg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "Crafting Dreams, Building Realities",
      description:
      " Expert woodworking that transforms your ideas into beautiful, lasting creations",
      image: banner02,
    },
    {
      id: 2,
      title: "Custom Solutions, Unmatched Quality",
      description:  "Precision craftsmanship for kitchens, furniture, and unique woodwork projects.",
      image: banner01,
    },
    {
      id: 3,
      title: "Your Vision, Our Expertise",
      description:  " Personalized carpentry services delivering exceptional results for every project",
      image: banner03,
    },
  ];
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[full]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div id="hero-box-container">
                <div id="hero-banner">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button   onClick={() => {
                  navigate("/our-works");
                }}>Our Work</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;
