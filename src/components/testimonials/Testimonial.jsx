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
      "We couldn’t be happier with the transformation of our home! From the initial design to the final touches, the team at [Your Company Name] worked with us every step of the way. Their professionalism, attention to detail, and commitment to quality exceeded our expectations. We would highly recommend them to anyone looking for reliable and skilled builders",
    rating: 5,
  },
  {
    name: "Michael Musi",
    role: "Soweto",
    quote:
      "As a business owner, I needed a construction team that understood the importance of both functionality and aesthetics. [Your Company Name] delivered a commercial space that reflects my brand and serves our needs perfectly. The project was completed on time and within budget, and we couldn’t be more satisfied with the final result",
    rating: 4,
  },
  {
    name: "Emily Tinashe",
    role: "Durban",
    quote:
      "Our renovation project was a huge success, and we owe it all to the amazing team at [Your Company Name]. They took our vision and turned it into a reality, enhancing both the look and functionality of our home. Their dedication to quality work and customer service made all the difference. We’re so glad we chose them for this important project",
    rating: 5,
  },
  {
    name: "David Smith",
    role: "Cape Town",
    quote:
      "Working with TSHOSHANE GROUP has been a game-changer for our development projects. Their project management skills and expertise in construction are unmatched. They consistently meet deadlines and deliver top-notch results. We’ve partnered on several projects and look forward to many more successful collaborations in the future.",
    rating: 4,
  },
  {
    name: "Lisa Tumi",
    role: "Protoria",
    quote:
      "The team at TSHOSHANE GROUP turned our dream home into a reality. They listened to our ideas, provided expert advice, and executed the plan perfectly. The level of care and attention to detail they put into our project was outstanding. We can’t thank them enough for creating such a beautiful space for our family",
    rating: 5,
  },
  {
    name: "James Banda",
    role: "North West",
    quote:
      "I’ve worked with many construction companies over the years, but none have impressed me like TSHOSHANE GROUP. Their ability to bring architectural designs to life while maintaining the highest standards of quality is truly remarkable. I always recommend them to my clients, knowing they will deliver exceptional results.",
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
