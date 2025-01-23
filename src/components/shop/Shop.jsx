import React from "react";
import "./Shop.css";
import work01 from "../../assets/wood08.jpeg";
import work02 from "../../assets/wood09.jpeg";
import work03 from "../../assets/wood10.jpeg";
import work04 from "../../assets/wood11.jpeg";
import work05 from "../../assets/wood12.jpeg";
import work06 from "../../assets/wood13.jpeg";
import work07 from "../../assets/wood14.jpeg";
import work08 from "../../assets/wood15.jpeg";
import work09 from "../../assets/wood16.jpeg";

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
      productName: "Skirting",
      price: 6.99,
      oldPrice: 8.99,
      description: "Bramfointain~ Johannesburg",
    },
    {
      id: 2,
      image: work02,
      productName: "Laminating Floor",
      price: 5.99,
      oldPrice: 12.0,
      description:
        "Soshanguwe , Pretoria",
    },
    {
      id: 3,
      image: work03, // Use the imported image
      productName: "Decking",
      price: 12.99,
      oldPrice: 20.0,
      description:
        "Soweto",
    },
    {
      id: 4,
      image: work04, // Use the imported image
      productName: "Wooden Door",
      price: 15.99,
      oldPrice: 10.0,
      description:
        "limpopo",
    },
    {
      id: 5,
      image: work05, // Use the imported image
      productName: "Wooden Kichen Unit",
      price: 124.0,
      oldPrice: 150.3,
      description:
        "Tembisa",
    },
    {
      id: 6,
      image: work06, // Use the imported image
      productName: "Bath Room Cardboads",
      price: 5.5,
      oldPrice: 8.9,
      description:
        "Rivonia, Sandton",
    },
    {
      id: 7,
      image: work07, // Use the imported image
      productName: "Wooden Chairs",
      price: 5.5,
      oldPrice: 8.9,
      description:
        "Rivonia, Sandton",
    },
    {
      id: 8,
      image: work08, // Use the imported image
      productName: "Wooden Floor",
      price: 5.5,
      oldPrice: 8.9,
      description:
        "Rivonia, Sandton",
    },
    {
      id: 9,
      image: work09, // Use the imported image
      productName: "Wooden Window",
      price: 5.5,
      oldPrice: 8.9,
      description:
        "Rivonia, Sandton",
    },

  ];

  return (
    <div className="container" id="shop-page">
      <h2>
        <span></span>Latest Works
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
              <p id="productionName"> {product.productName}</p>
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
