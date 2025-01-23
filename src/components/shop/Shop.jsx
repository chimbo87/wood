import React from "react";
import "./Shop.css";
import work01 from "../../assets/project.jpeg";
import work02 from "../../assets/work01.jpeg";
import work03 from "../../assets/work02.jpeg";
import work04 from "../../assets/work04.jpeg";
import work05 from "../../assets/work05.jpeg";
import work06 from "../../assets/work06.jpeg";
import work07 from "../../assets/project.jpeg";
import work08 from "../../assets/renovation.jpeg";
import work09 from "../../assets/building.jpeg";

import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Shop() {
  const navigate = useNavigate();
  const Products = [
    {
      id: 1,
      image: work01, // Use the imported image
      productName: "Project management",
      price: 6.99,
      oldPrice: 8.99,
      description: "Bramfointain~ Johannesburg",
    },
    {
      id: 2,
      image: work02,
      productName: "Double Storey Construction",
      price: 5.99,
      oldPrice: 12.0,
      description:
        "Soshanguwe , Pretoria",
    },
    {
      id: 3,
      image: work03, // Use the imported image
      productName: "DrainageConstruction",
      price: 12.99,
      oldPrice: 20.0,
      description:
        "Soweto",
    },
    {
      id: 4,
      image: work04, // Use the imported image
      productName: "Bridge Construction",
      price: 15.99,
      oldPrice: 10.0,
      description:
        "limpopo",
    },
    {
      id: 5,
      image: work05, // Use the imported image
      productName: "Road Pavement",
      price: 124.0,
      oldPrice: 150.3,
      description:
        "Tembisa",
    },
    {
      id: 6,
      image: work06, // Use the imported image
      productName: "House Renovation",
      price: 5.5,
      oldPrice: 8.9,
      description:
        "Rivonia, Sandton",
    },

  ];

  return (
    <div className="container" id="shop-page">
      <h2>
        <span></span>Our Works
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {Products.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              id="shop-page-card"
              onClick={() => {
                navigate("/our-works");
              }}
            >
              <img src={product.image} alt={product.title} />
              <p> {product.productName}</p>
              <div id="shop-card-price">
                <p id="shop-card-priceB">{product.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Shop;
