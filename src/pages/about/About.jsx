import React from "react";
import aboutus from "../../assets/blog02.jpeg";
import person01 from "../../assets/person.jpeg";
import person02 from "../../assets/person02.jpeg";
import blog01 from "../../assets/blog01.jpeg";
import blog02 from "../../assets/blog03.jpeg";
import blog03 from "../../assets/blog04.jpeg";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import "./About.css";

function About() {
  return (
    <>
      <div className="container-fluid" id="about-page">
        <h4>About Us</h4>
      </div>
      <div className="container" id="about-page-box">
        {/* <div id="about-page-card">
          <h2>Who Are We ?</h2>
          <h3>
            We believe in building with precision and attention to detail. Every
            project we undertake is guided by our commitment to superior
            craftsmanship and the highest industry standards.
          </h3>
        </div> */}
      </div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="history-card">
              <h2>Who Are We ?</h2>
              <p>
                At <b>TSHOSHANE GROUP</b>, we are a team of dedicated
                professionals with a passion for building and transforming
                spaces. With years of experience in the construction industry,
                we specialize in delivering high-quality residential,
                commercial, and custom projects that meet the unique needs of
                our clients. Our approach is rooted in collaboration,
                innovation, and craftsmanship, ensuring that each project
                reflects our commitment to excellence. Whether we’re building
                from the ground up or renovating an existing space, we bring the
                same level of dedication and attention to detail, making sure
                that every job is done right.
              </p>
              <p>
                Our core values of integrity, reliability, and customer
                satisfaction are the foundation of everything we do. We believe
                that strong communication, transparency, and a client-centered
                approach are key to successful project delivery. From initial
                consultation to the final touches, we work closely with you at
                every stage to ensure that your vision becomes a reality.At{" "}
                <b>TSHOSHANE GROUP</b>, we pride ourselves on creating lasting
                relationships with our clients, built on trust and the
                successful completion of projects that stand the test of time.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="history-cardB">
              <img src={aboutus} alt="aboutbanner" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div id="about-page-cardbanner">
          <div id="about-page-cardbannercard">
            <h2>
              We understand that time is of the essence, which is why we
              prioritize timely completion without compromising quality.
            </h2>
          </div>
        </div>
      </div> */}

      <div className="container" id="about-team-card">
        <h2>Meet Our Team Of Experts</h2>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="team-card">
              <img src={person01} alt="person" />
              <h6>Civil Engineer</h6>
              <div id="team-card-icons">
                <MdOutlinePhone id="team-icons" />
                <AiOutlineWhatsApp id="team-icons" />
                <MdOutlineMail id="team-icons" />
              </div>
              <p>James Doe</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="team-card">
              <img src={person02} alt="person" />
              <h6>Sales Mananger</h6>
              <div id="team-card-icons">
                <MdOutlinePhone id="team-icons" />
                <AiOutlineWhatsApp id="team-icons" />
                <MdOutlineMail id="team-icons" />
              </div>
              <p>Jane Doe</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="team-card">
              <img src={person01} alt="person" />
              <h6>Marketing Manager</h6>
              <div id="team-card-icons">
                <MdOutlinePhone id="team-icons" />
                <AiOutlineWhatsApp id="team-icons" />
                <MdOutlineMail id="team-icons" />
              </div>
              <p>John Doe</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="asked-qtns">
        <h2>Why Choose Us ?</h2>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Expertise and Experience
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                With years of hands-on experience in the construction industry,
                our team brings a wealth of knowledge to every project. We’ve
                successfully completed a wide range of residential, commercial,
                and custom-built constructions, allowing us to understand the
                unique needs of every client and deliver results that exceed
                expectations. Our experience ensures that your project is in
                safe hands, from initial design to final completion.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Commitment to Quality
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                We believe in building with precision and attention to detail.
                Every project we undertake is guided by our commitment to
                superior craftsmanship and the highest industry standards.
                Whether it’s the materials we choose or the finishing touches,
                we don’t compromise on quality. Our goal is to ensure your
                project is not only functional but built to last, offering value
                for years to come.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Customer-Centered Approach
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                At TSHOSHANE GROUP, you’re more than just a client — you’re a
                partner. We work closely with you throughout every step of the
                project, listening to your ideas, providing expert advice, and
                ensuring that your vision comes to life. Our transparent
                communication and collaborative process guarantee that we meet
                your needs and exceed your expectations at every stage.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Timely Project Delivery
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                We understand that time is of the essence, which is why we
                prioritize timely completion without compromising quality. Our
                project management team meticulously plans, coordinates, and
                monitors progress to ensure that all milestones are met on time.
                We strive to keep projects on track and within budget,
                minimizing delays and maximizing efficiency for a stress-free
                construction experience
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Integrity and Transparency
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                Honesty and transparency are the pillars of our business. From
                the first consultation to the final inspection, we keep you
                informed at every stage of the process. You can rely on us to
                provide clear, accurate pricing, honest advice, and detailed
                timelines. We value trust and integrity, ensuring that there are
                no hidden surprises, and we stand by our work with a commitment
                to customer satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="blogs-section">
        <h2>Blogs</h2>
        <div class="row">
          <div class="col-md-lg col-md-4">
            <div id="blog-card">
              <img src={blog02} alt="aboutbanner" />
              <h4>
                How to Choose the Right Foundation Type for Your Home Project
              </h4>
              <p>
                By understanding soil conditions, climate factors, and building
                requirements, homeowners can make informed decisions about their
                foundation type. This guide explores the pros and cons of common
                foundation options including slab, crawl space, and basement
                foundations, helping you understand which option best suits your
                specific construction needs and budget constraints.
              </p>
            </div>
          </div>
          <div class="col-md-lg col-md-4">
            <div id="blog-card">
              <img src={blog01} alt="aboutbanner" />
              <h4>Essential Safety Protocols for Modern Construction Sites</h4>
              <p>
                With construction technology advancing rapidly, safety measures
                must evolve to protect workers and ensure project success. From
                AI-powered monitoring systems to advanced personal protective
                equipment and automated risk assessment tools, modern
                construction sites are implementing comprehensive safety
                protocols that go beyond basic compliance to create truly secure
                work environments.
              </p>
            </div>
          </div>
          <div class="col-md-lg col-md-4">
            <div id="blog-card">
              <img src={blog03} alt="aboutbanner" />
              <h4>
                Top 5 Sustainable Building Materials Revolutionizing
                Construction in 2025
              </h4>
              <p>
                The construction industry is embracing eco-friendly innovations
                like never before. From engineered wood products that sequester
                carbon to recycled steel and bio-based insulation materials,
                these sustainable alternatives are not only better for the
                environment but often offer superior performance and long-term
                cost savings compared to traditional materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
