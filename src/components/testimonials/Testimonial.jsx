import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoMdStar } from "react-icons/io";
import { LuHandshake } from "react-icons/lu";
import { LuCalendarClock } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineDesignServices } from "react-icons/md";

import "./Testimonial.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Jaiors",
    role: "Tembisa",
    quote:
      "From start to finish, the team at ELITE CAPENTRY delivered an outstanding renovation. Their expertise in cabinetry and attention to detail transformed our kitchen into a space we absolutely love. We couldn’t be more pleased!",
    rating: 5,
  },
  {
    name: "Michael Musi",
    role: "Soweto",
    quote:
      "Working with ELITE CAPENTRY was such a smooth experience. They were always on time, listened to our needs, and provided expert advice. The quality of their work exceeded our expectations. Highly recommended!",
    rating: 4,
  },
  {
    name: "Emily Tinashe",
    role: "Durban",
    quote:
      "We hired ELITE CAPENTRY to build a custom deck for our backyard, and the result is stunning. The team’s craftsmanship and professionalism made the entire process easy and enjoyable. Our family is enjoying the outdoor space every day!",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "Cape Town",
    quote:
      "From custom shelving to our new staircase, ELITE CAPENTRY brought our ideas to life with exceptional quality. The team was friendly, reliable, and truly cares about the details. We’re so happy with the final results",
    rating: 4,
  },
  {
    name: "Lisa Tumi",
    role: "Protoria",
    quote:
      "ELITE CAPENTRY did an amazing job renovating our home office with custom carpentry. Their skill and passion for their work really showed, and we couldn’t be happier with the end result. Thank you for transforming our space!",
    rating: 5,
  },
  {
    name: "James Banda",
    role: "North West",
    quote:
      "Working with ELITE CAPENTRY was such a smooth experience. They were always on time, listened to our needs, and provided expert advice. The quality of their work exceeded our expectations. Highly recommended!",
    rating: 4,
  },
];

function Testimonial() {
  return (
    <div className="container">
      <div id="testimony-top">
        <div id="testimony-top-card">
          <div class="row">
            <div class="col-lg-6 col-md-4">
              <div id="testimony-top-innercard">
                <h2>
                  We create innovative and sustainable construction solutions to
                  transform your vision into reality.
                </h2>
              </div>
            </div>
            <div class="col-lg-6 col-md-4">
              <div id="testimony-top-innercardB">
                <ul>
                  <li>
                    {" "}
                    <span>
                      {" "}
                      <LuHandshake />
                    </span>{" "}
                    Sustanaibility
                  </li>
                  <li>
                    {" "}
                    <span>
                      <LuCalendarClock />{" "}
                    </span>
                    Project on time
                  </li>
                  <li>
                    <span>
                      {" "}
                      <GrTechnology />
                    </span>{" "}
                    Morden Technology
                  </li>
                  <li>
                    {" "}
                    <span>
                      {" "}
                      <MdOutlineDesignServices />
                    </span>
                    Latest Designs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="testimonial-header">
        <h2>
          <span></span>What Our Clients Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-12"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div class="row" id="testimonial-card">
                <div id="testimonial-card-star">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IoMdStar key={i} id="testimonial-rate-star" />
                  ))}
                </div>
                <p id="testimonial-quote">"{testimonial.quote}"</p>
                <div id="testimonial-card-user">
                  <h5>{testimonial.name}</h5>
                  <p>
                    <i>{testimonial.role}</i>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonial;
