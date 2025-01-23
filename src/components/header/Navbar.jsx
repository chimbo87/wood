import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import logo from "../../assets/capentrylogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 

function Navbar() {
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [animatedLinks, setAnimatedLinks] = useState(false);

  const navigationItems = [
    { path: "/", name: "home" },
    { path: "/services", name: "services" },
    { path: "/about", name: "about" },
    { path: "/our-works", name: "our-works" },
  ];

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
    setAnimatedLinks(!animatedLinks);
  };

  useEffect(() => {
    if (!isMenuActive) {
      setAnimatedLinks(false);
    }
  }, [isMenuActive]);

  return (
    <div id="navigation-bar">
      <div id="nav-top">
        <div id="nav-top-card">
          <small>
            <MdEmail /> info@elitecapentry.co.za
          </small>
        </div>
        <div id="nav-top-card">
          <small id="top-nav-add">
            <IoLocation /> 123 Example Road, Test Road . Example City
          </small>
        </div>
        <div id="nav-top-card">
          <small id="top-nav-add">
            <FaPhoneAlt /> +2700 000 0000
          </small>
          <small id="top-nav-add">/ +2700 000 0000</small>
        </div>
        <div id="nav-top-card">
          <FaFacebookF id="nav-top-cardicon" />{" "}
          <RiInstagramFill id="nav-top-cardicon" />
          <TbBrandWhatsappFilled id="nav-top-cardicon" />
        </div>
      </div>
      <nav className="navbar">
        <div id="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </div>

        <ul className={`nav-links ${isMenuActive ? "active" : ""}`}>
          {navigationItems.map((item, index) => (
            <li
              key={item.name}
              style={
                animatedLinks
                  ? {
                      animation: `navLinkFade 0.5s ease forwards ${
                        index / 7 + 0.3
                      }s`,
                    }
                  : {}
              }
            >
              <Link
                to={item.path}
                className={
                  window.location.pathname === item.path ? "active" : ""
                }
                onClick={() => {
                  setIsMenuActive(false);
                  setAnimatedLinks(false);
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="chat-btn"
          onClick={() =>
            window.open(
              "https://wa.me/27681159944?text=Hello%20ELITECAPENTRY,%20I%20would%20like%20to%20enquire%20about%20your%20services",
              "_blank"
            )
          }
        >
          Get Quotation
        </button>

        <button
          className={`hamburger ${isMenuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </div>
  );
}
export default Navbar;
