import React, { useState, useEffect } from "react";
import { Spin, Pagination } from "antd";
import "./Gallery.css";
import { BiFilterAlt } from "react-icons/bi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import shop1 from "../../assets/products/wood01.jpeg";
import shop2 from "../../assets/products/wood02.jpeg";
import shop3 from "../../assets/products/wood03.jpeg";
import shop4 from "../../assets/products/wood04.jpeg";
import shop5 from "../../assets/products/wood05.jpeg";
import shop6 from "../../assets/products/wood06.jpeg";
import shop7 from "../../assets/products/wood07.jpeg";
import shop8 from "../../assets/products/wood08.jpeg";
import shop9 from "../../assets/products/wood09.jpeg";
import shop10 from "../../assets/products/wood10.jpeg";
import shop11 from "../../assets/products/wood11.jpeg";
import shop12 from "../../assets/products/wood12.jpeg";
// import shop13 from "../../assets/products/wood13.jpeg";
// import shop14 from "../../assets/products/wood14.jpeg";
// import shop15 from "../../assets/products/wood15.jpeg";
// import shop16 from "../../assets/products/wood16.jpeg";
// import shop17 from "../../assets/products/wood17.jpeg";
// import shop18 from "../../assets/products/wood18.jpeg";
// import shop19 from "../../assets/products/wood19.jpeg";
// import shop20 from "../../assets/products/wood20.jpeg";

// import shop48 from "../../assets/products/product26.jpeg";
// import shop49 from "../../assets/products/product27.jpeg";
// import shop50 from "../../assets/products/product28.jpeg";
// import shop51 from "../../assets/products/product29.jpeg";
// import shop52 from "../../assets/products/product30.jpeg";
// import shop53 from "../../assets/products/product31.jpeg";
// import shop54 from "../../assets/products/product32.jpeg";
// import shop55 from "../../assets/products/product33.jpeg";
// import shop56 from "../../assets/products/product34.jpeg";
// import shop57 from "../../assets/products/fold01.jpeg";
// import shop58 from "../../assets/products/fold02.jpeg";
// import shop59 from "../../assets/products/fold03.jpeg";
// import shop60 from "../../assets/products/fold04.jpeg";
// import shop61 from "../../assets/products/fold05.jpeg";

function Gallery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20; // Number of items per page

  const Products = [
    {
      id: 13,
      image: shop1,
      images: [shop2, shop3, shop4],
      productName: "Decking & Wood",
      price: 380.0,
      oldPrice: 230.0,
      category: "decking",
      description:
        "We specialize in creating stunning, durable decks and custom wood structures that blend seamlessly with your lifestyle and surroundings. Whether it’s a cozy backyard retreat or a sleek modern patio, our expert team uses premium materials and innovative designs to bring your vision to life. Enjoy the perfect balance of beauty and functionality with our tailored solutions. Let’s build your dream outdoor space together – contact us today!",
    },
    {
      id: 12,
      image: shop7,
      images: [shop5, shop9, shop1],
      productName: "Cupboards",
      price: 240.0,
      oldPrice: 300.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 1,
      image: shop1,
      images: [shop1, shop6, shop7],
      productName: "Cupboards",
      price: 20.0,
      oldPrice: 8.99,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 15,
      image: shop2,
      images: [shop2, shop6],
      productName: "Cupboards",
      price: 500.0,
      oldPrice: 8.99,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },

    {
      id: 6,
      image: shop6,
      images: [shop6, shop6, shop7, shop8],
      productName: "Decking",
      price: 25.0,
      oldPrice: 8.9,
      category: "decking",
      description:
        "We specialize in creating stunning, durable decks and custom wood structures that blend seamlessly with your lifestyle and surroundings. Whether it’s a cozy backyard retreat or a sleek modern patio, our expert team uses premium materials and innovative designs to bring your vision to life. Enjoy the perfect balance of beauty and functionality with our tailored solutions. Let’s build your dream outdoor space together – contact us today!",
    },
    {
      id: 11,
      image: shop6,
      images: [shop1, shop8, shop2, shop6, shop7],
      productName: "Decking",
      price: 400.0,
      oldPrice: 300.0,
      category: "decking",
      description:
        "We specialize in creating stunning, durable decks and custom wood structures that blend seamlessly with your lifestyle and surroundings. Whether it’s a cozy backyard retreat or a sleek modern patio, our expert team uses premium materials and innovative designs to bring your vision to life. Enjoy the perfect balance of beauty and functionality with our tailored solutions. Let’s build your dream outdoor space together – contact us today!",
    },
    {
      id: 7,
      image: shop7,
      images: [shop7, shop8, shop9],
      productName: "Cupboards",
      price: 5.0,
      oldPrice: 12.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },

    {
      id: 16,
      image: shop2,
      images: [shop3, shop4],
      productName: "Doors and Windows",
      price: 75.0,
      oldPrice: 380.0,
      category: "doors and windows",
      description:
        "We create custom, high-quality wooden designs that combine timeless elegance with modern performance. Whether you’re looking for classic, rustic, or contemporary styles, our expertly crafted windows and doors are built to last, offering superior insulation, durability, and aesthetic appeal. Let us help you elevate your home’s curb appeal and energy efficiency with our bespoke wooden solutions. Contact us today to bring your vision to life! 🪟🚪✨",
    },
    {
      id: 17,
      image: shop2,
      images: [shop2, shop3, shop4],
      productName: "Decking",
      price: 1800.0,
      oldPrice: 380.0,
      category: "decking",
      description:
        "We specialize in creating stunning, durable decks and custom wood structures that blend seamlessly with your lifestyle and surroundings. Whether it’s a cozy backyard retreat or a sleek modern patio, our expert team uses premium materials and innovative designs to bring your vision to life. Enjoy the perfect balance of beauty and functionality with our tailored solutions. Let’s build your dream outdoor space together – contact us today!",
    },
    {
      id: 18,
      image: shop4,
      images: [shop4, shop5, shop5],
      productName: "Cupboards",
      price: 300.0,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 19,
      image: shop1,
      images: [shop1, shop4, shop2],
      productName: "Cupboards",
      price: 320.5,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 20,
      image: shop9,
      images: [shop4, shop3],
      productName: "Cupboards",
      price: 50.0,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 21,
      image: shop7,
      images: [shop8, shop7],
      productName: "Cupboards",
      price: 70.0,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 22,
      image: shop12,
      images: [shop1, shop8],
      productName: "Cupboards",
      price: 55.0,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 23,
      image: shop9,
      images: [shop9, shop4, shop3],
      productName: "Decking",
      price: 85.0,
      oldPrice: 380.0,
      category: "decking",
      description:
        "We specialize in creating stunning, durable decks and custom wood structures that blend seamlessly with your lifestyle and surroundings. Whether it’s a cozy backyard retreat or a sleek modern patio, our expert team uses premium materials and innovative designs to bring your vision to life. Enjoy the perfect balance of beauty and functionality with our tailored solutions. Let’s build your dream outdoor space together – contact us today!",
    },
    {
      id: 24,
      image: shop3,
      images: [shop3, shop1, shop2],
      productName: "Decking",
      price: 320.5,
      oldPrice: 380.0,
      category: "decking",
      description:
        "We specialize in creating stunning, durable decks and custom wood structures that blend seamlessly with your lifestyle and surroundings. Whether it’s a cozy backyard retreat or a sleek modern patio, our expert team uses premium materials and innovative designs to bring your vision to life. Enjoy the perfect balance of beauty and functionality with our tailored solutions. Let’s build your dream outdoor space together – contact us today!",
    },
    {
      id: 25,
      image: shop3,
      images: [shop3, shop3, shop3],
      productName: "Decking",
      price: 80.0,
      oldPrice: 380.0,
      category: "decking",
      description:
        "We specialize in creating stunning, durable decks and custom wood structures that blend seamlessly with your lifestyle and surroundings. Whether it’s a cozy backyard retreat or a sleek modern patio, our expert team uses premium materials and innovative designs to bring your vision to life. Enjoy the perfect balance of beauty and functionality with our tailored solutions. Let’s build your dream outdoor space together – contact us today!",
    },
    {
      id: 26,
      image: shop5,
      images: [shop5, shop1, shop2],
      productName: "Cupboards",
      price: 85.0,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 27,
      image: shop3,
      images: [shop3, shop3, shop3],
      productName: "Cupboards",
      price: 70.0,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 28,
      image: shop3,
      images: [shop3, shop3, shop3],
      productName: "Cupboards",
      price: 75.0,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },
    {
      id: 29,
      image: shop5,
      images: [shop3, shop3, shop3],
      productName: "Cupboards",
      price: 100,
      oldPrice: 380.0,
      category: "cupboards",
      description:
        "We design and craft high-quality, stylish cupboards tailored to your needs, whether it’s for your kitchen, bedroom, or office. With a focus on precision, durability, and modern aesthetics, we bring functionality and elegance to every corner of your home or business. Let us help you maximize your storage while enhancing your interior design.",
    },

    //here

    {
      id: 30,
      image: shop3,
      images: [shop3, shop3, shop3],
      productName: "Windows & Doors",
      price: 80.0,
      oldPrice: 380.0,
      category: "doors and windows",
      description:
        "We create custom, high-quality wooden designs that combine timeless elegance with modern performance. Whether you’re looking for classic, rustic, or contemporary styles, our expertly crafted windows and doors are built to last, offering superior insulation, durability, and aesthetic appeal. Let us help you elevate your home’s curb appeal and energy efficiency with our bespoke wooden solutions. Contact us today to bring your vision to life! 🪟🚪✨",
    },
    {
      id: 31,
      image: shop3,
      images: [shop3, shop2, shop3],
      productName: "Refurbishment",
      price: 130.0,
      oldPrice: 380.0,
      category: "refurbishment",
      description:
        "Whether it’s restoring worn-out furniture, reviving tired decks, or rejuvenating wooden floors, we bring unmatched skill and care to every project. Using eco-friendly techniques and premium finishes, we preserve the natural beauty of wood while enhancing its durability and charm. Trust us to transform your old, weathered wood into stunning, like-new creations. Let’s restore the elegance of your space – contact us today for a consultation!",
    },

    {
      id: 32,
      image: shop7,
      images: [shop5, shop5, shop8],
      productName: "Doors and Windows",
      price: 250.5,
      oldPrice: 380.0,
      category: "doors and windows",
      description:
        "We create custom, high-quality wooden designs that combine timeless elegance with modern performance. Whether you’re looking for classic, rustic, or contemporary styles, our expertly crafted windows and doors are built to last, offering superior insulation, durability, and aesthetic appeal. Let us help you elevate your home’s curb appeal and energy efficiency with our bespoke wooden solutions. Contact us today to bring your vision to life!🪟🚪✨",
    },
    {
      id: 33,
      image: shop5,
      images: [shop5, shop6, shop8],
      productName: "Refurbishment",
      price: 300.0,
      oldPrice: 380.0,
      category: "refurbishment",
      description:
        "Whether it’s restoring worn-out furniture, reviving tired decks, or rejuvenating wooden floors, we bring unmatched skill and care to every project. Using eco-friendly techniques and premium finishes, we preserve the natural beauty of wood while enhancing its durability and charm. Trust us to transform your old, weathered wood into stunning, like-new creations. Let’s restore the elegance of your space – contact us today for a consultation!",
    },
    {
      id: 34,
      image: shop6,
      images: [shop5, shop5, shop6],
      productName: "Windows & Doors",
      price: 550.0,
      oldPrice: 380.0,
      category: "doors and windows",
      description:
        "We create custom, high-quality wooden designs that combine timeless elegance with modern performance. Whether you’re looking for classic, rustic, or contemporary styles, our expertly crafted windows and doors are built to last, offering superior insulation, durability, and aesthetic appeal. Let us help you elevate your home’s curb appeal and energy efficiency with our bespoke wooden solutions. Contact us today to bring your vision to life! 🪟🚪✨",
    },
    {
      id: 35,
      image: shop8,
      images: [shop6, shop9, shop6],
      productName: "Refurbishment",
      price: 580.0,
      oldPrice: 380.0,
      category: "refurbishment",
      description:
        "Whether it’s restoring worn-out furniture, reviving tired decks, or rejuvenating wooden floors, we bring unmatched skill and care to every project. Using eco-friendly techniques and premium finishes, we preserve the natural beauty of wood while enhancing its durability and charm. Trust us to transform your old, weathered wood into stunning, like-new creations. Let’s restore the elegance of your space – contact us today for a consultation!",
    },
    {
      id: 36,
      image: shop9,
      images: [shop5, shop6, shop8],
      productName: "Doors & Windows",
      price: 660.0,
      oldPrice: 380.0,
      category: "doors and windows",
      description:
        "We create custom, high-quality wooden designs that combine timeless elegance with modern performance. Whether you’re looking for classic, rustic, or contemporary styles, our expertly crafted windows and doors are built to last, offering superior insulation, durability, and aesthetic appeal. Let us help you elevate your home’s curb appeal and energy efficiency with our bespoke wooden solutions. Contact us today to bring your vision to life! 🪟🚪✨",
    },

    {
      id: 37,
      image: shop9,
      images: [shop5, shop6, shop8],
      productName: "Refurbishment",
      price: 980.0,
      oldPrice: 380.0,
      category: "refurbishment",
      description:
        "Whether it’s restoring worn-out furniture, reviving tired decks, or rejuvenating wooden floors, we bring unmatched skill and care to every project. Using eco-friendly techniques and premium finishes, we preserve the natural beauty of wood while enhancing its durability and charm. Trust us to transform your old, weathered wood into stunning, like-new creations. Let’s restore the elegance of your space – contact us today for a consultation! ✨🪵",
    },
  ];
  const handleButtonClick = (buttonId, category) => {
    setActiveButton(buttonId);
    filterProducts(category);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const filterProducts = (category) => {
    if (!category || category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchProducts = () => {
      setTimeout(() => {
        setProducts(Products);
        setFilteredProducts(Products);
        setLoading(false);
      }, 200);
    };

    fetchProducts();
  }, []);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * pageSize;
  const indexOfFirstProduct = indexOfLastProduct - pageSize;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of gallery when page changes
    document
      .getElementById("gallery-box")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" tip="Loading products..." />
      </div>
    );
  }

  return (
    <div className="container" id="gallery-box">
      <div id="gallery-box-filterbtns">
        <button
          className={activeButton === 1 ? "active" : ""}
          onClick={() => handleButtonClick(1, "all")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiFilterAlt style={{ fontSize: "20px", marginRight: "10px" }} />
          Filter All
        </button>
        <button
          className={activeButton === 2 ? "active" : ""}
          onClick={() => handleButtonClick(2,"cupboards" )}
        >
          Cupboards
        </button>

        <button
          className={activeButton === 4 ? "active" : ""}
          onClick={() => handleButtonClick(4, "decking")}
        >
          Decking & Wooden
        </button>

        <button
          className={activeButton === 5 ? "active" : ""}
          onClick={() => handleButtonClick(5, "doors and windows")}
        >
          Doors & Windows
        </button>
        <button
          className={activeButton === 6 ? "active" : ""}
          onClick={() => handleButtonClick(6, "refurbishment")}
        >
      Refurbishment
        </button>
      </div>

      <div className="row g-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="col-6 col-lg-3">
            <div
              id="products-inner-card"
              onClick={() => {
                navigate(`/product-details/${product.id}`, {
                  state: { product },
                });
              }}
            >
              <img
                src={product.image}
                alt={product.productName}
                className="img-fluid"
              />
              <small
                style={{
                  textAlign: "center",
                  color: "#1d2f61",
                  display: "block",
                  marginTop: "8px",
                  marginBottom: "4px",
                }}
              ></small>
              <div className="pricing-info">
                <div id="price-tag">
                  <small>{product.productName}</small>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem 0",
        }}
      >
        <Pagination
          current={currentPage}
          total={filteredProducts.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}

export default Gallery;
