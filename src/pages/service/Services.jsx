import React from "react";
import "./Services.css";
import building from "../../assets/building.jpeg";
import project from "../../assets/project.jpeg";
import renovation from "../../assets/renovation.jpeg";

function Services() {
  return (
    <>
      <div className="container-fluid" id="serives-page">
        <h2>Our Services</h2>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="service-card">
              <img src={building} alt="building" />
              <h6>New Construction</h6>
              <h4>YOUR DREAM OUR BLUEPRINT</h4>
              <p>
                At TSHOSHANE GROUP, we believe every successful project begins
                with a vision. Whether it's a residential space, a commercial
                development, or a custom-built structure, we work closely with
                you to bring your ideas to life. Our experienced team of
                architects, engineers, and builders translate your dreams into
                precise plans, ensuring that every detail is carefully
                considered. From the initial concept to the final brick, we are
                committed to delivering exceptional results that exceed your
                expectations, turning your dream into reality with quality,
                integrity, and craftsmanship.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="service-card">
              <img src={project} alt="project" />
              <h6>Project Management</h6>
              <h4>QUALITY YOU CAN TRUST</h4>
              <p>
                Our expert project management team ensures that every
                construction project is delivered on time, within budget, and to
                the highest standards. We take a hands-on approach, overseeing
                every phase of the project—from planning and procurement to
                execution and final delivery. With clear communication,
                meticulous attention to detail, and a focus on efficiency, we
                coordinate all aspects of the project, mitigating risks and
                addressing challenges along the way. Our goal is to provide
                seamless, stress-free project management that keeps your
                construction journey smooth and successful, every step of the
                way.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="service-card">
              <img src={renovation} alt="building" />
              <h6>Renovations & Remodeling</h6>
              <h4>BUILDING THE FUTURE TOGATHER</h4>
              <p>
                Whether you're looking to update your kitchen, expand your
                living space, or transform an entire property, our renovations
                and remodeling services bring new life to your space. We
                understand that each renovation is unique, which is why we
                collaborate closely with you to design solutions that align with
                your vision, needs, and budget. Our skilled team ensures a
                smooth process from concept to completion, combining innovation
                with craftsmanship to create beautiful, functional spaces that
                enhance both comfort and value. No matter the size or complexity
                of the project, we are dedicated to delivering exceptional
                results that stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="other-services-box" className="container">
        <h2>
          From residential to commercial projects, our expertise ensures every
          build is strong and reliable.
        </h2>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="other-services-card">
              <h4>Infrastructure construction</h4>
              <ul>
                <li> Roads</li>
                <li>Bridges</li>
                <li>Gabions</li>
                <li>Tunnels</li>
                <li>Airports</li>
                <li>Dams</li>
                <li>Water treatment plants</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="other-services-card">
              <h4>Residential construction</h4>
              <ul>
                <li> Single-family homes</li>
                <li>Multi-family homes</li>
                <li>Custom homes</li>
                <li>Renovations</li>
                <li>Roofing</li>
                <li>Paving and Skimming</li>
                <li>Ceiling skimming</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="other-services-card">
              <h4>Industrial construction</h4>

              <ul>
                <li> Factories</li>
                <li>Warehouses</li>
                <li>Power plants</li>
                <li>Manufacturing facilities</li>
                <li>Office buildings</li>
                <li>Retail stores</li>
                <li>Interior finishing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
