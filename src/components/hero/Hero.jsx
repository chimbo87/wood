import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner01 from "../../assets/construction01.jpeg";
import banner02 from "../../assets/construction02.jpeg";
import banner03 from "../../assets/construction03.jpeg";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      title: "Building the Future Together",
      description:
      "We create innovative and sustainable construction solutions to transform your vision into reality.",
      image: banner02,
    },
    {
      id: 2,
      title: "Quality You Can Trust",
      description:  "From residential to commercial projects, our expertise ensures every build is strong and reliable.",
      image: banner01,
    },
    {
      id: 3,
      title: "Your Dream, Our Blueprint",
      description:  "Let us bring your ideas to life with precision, dedication, and unmatched craftsmanship.",
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
