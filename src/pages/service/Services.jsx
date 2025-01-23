import React, { useEffect, useRef } from "react";
import "./Services.css";
import building from "../../assets/wood08.jpeg";
import project from "../../assets/wood09.jpeg";
import renovation from "../../assets/wood10.jpeg";
import refurbishment from "../../assets/wood10.jpeg";
import painting from "../../assets/wood08.jpeg";
import windowdoor from "../../assets/wood11.jpeg";

function Services() {
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-card");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      <div className="container-fluid" id="serives-page">
        <h2>Our Services</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div
              ref={(el) => (serviceCardsRef.current[0] = el)}
              id="service-card"
              className="service-card-hidden"
            >
              <img src={building} alt="building" />
              <h6>SKIRTING</h6>
              <h4>Seamless Finishes for Every Room</h4>
              <p>
                Add a clean and polished finish to your rooms with our expertly
                crafted skirting boards. Whether you're renovating or building
                from scratch, our custom skirting solutions enhance the
                aesthetic of your space while protecting walls from wear and
                tear.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              ref={(el) => (serviceCardsRef.current[1] = el)}
              id="service-card"
              className="service-card-hidden"
            >
              <img src={project} alt="project" />
              <h6>LAMINATING FLOORS</h6>
              <h4>Durable and Stylish Flooring Solutions</h4>
              <p>
                Durable, stylish, and easy to maintain—our laminating flooring
                options provide the perfect solution for any space. Choose from
                a variety of finishes that replicate the look of natural wood or
                stone, combining beauty with practicality.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              ref={(el) => (serviceCardsRef.current[2] = el)}
              id="service-card"
              className="service-card-hidden"
            >
              <img src={refurbishment} alt="building" />
              <h6>DECKING</h6>
              <h4>Create the Perfect Outdoor Retreat</h4>
              <p>
                Transform your outdoor space with our custom decking solutions.
                Whether you're looking for a relaxing retreat or a place to
                entertain, our high-quality materials and expert craftsmanship
                create a durable, stylish deck that enhances your home’s
                exterior.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              ref={(el) => (serviceCardsRef.current[3] = el)}
              id="service-card"
              className="service-card-hidden"
            >
              <img src={painting} alt="building" />
              <h6>REFURBISHMENT</h6>
              <h4>Revitalize Your Space </h4>
              <p>
                Breathe new life into your property with our refurbishment
                services. Whether it's a full renovation or a small update, our
                team delivers high-quality craftsmanship to transform your
                space, making it look and feel brand new.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              ref={(el) => (serviceCardsRef.current[4] = el)}
              id="service-card"
              className="service-card-hidden"
            >
              <img src={windowdoor} alt="building" />
              <h6>DOORS & WINDOWS</h6>
              <h4>Enhancing Style and Security</h4>
              <p>
                Upgrade your home with stylish and functional doors and windows.
                We offer a range of designs to suit your needs, from
                contemporary to classic, ensuring durability and energy
                efficiency while complementing your interior décor.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div
              ref={(el) => (serviceCardsRef.current[5] = el)}
              id="service-card"
              className="service-card-hidden"
            >
              <img src={renovation} alt="building" />
              <h6>PAINTING</h6>
              <h4>Vibrant, Long-Lasting Finishes</h4>
              <p>
                Give your home or business a fresh look with our professional
                painting services. We use high-quality paints and expert
                techniques to deliver flawless finishes, brightening up any room
                and ensuring long-lasting results.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="other-services-box" className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div id="other-services-card">
              <h4>Residential Carpentry</h4>
              <ul>
                <li>Custom Furniture</li>
                <li>Interior Woodwork</li>
                <li>Staircases and Balustrades</li>
                <li>Built-in Shelving and Storage</li>
                <li>Home Office Solutions</li>
               
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div id="other-services-card">
              <h4>Specialty Carpentry</h4>
              <ul>
                <li> Bespoke Cabinetry</li>
                <li>Wooden Decks and Pergolas</li>
                <li>Garden Sheds and Outdoor Structures</li>
                <li>Wooden Fencing and Gates</li>
                <li>Fireplaces and Mantels</li>
              
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div id="other-services-card">
              <h4>Carpentry Renovations</h4>
              <ul>
                <li> Room Makeovers</li>
                <li>Loft Conversions</li>
                <li>Kitchen and Bathroom Joinery</li>
                <li>Structural Repairs and Restoration</li>
                <li>Flooring and Skirting Upgrades</li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
