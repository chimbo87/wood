import React from "react";
import aboutus from "../../assets/wood04.jpeg";
import person01 from "../../assets/person.jpeg";
import person02 from "../../assets/person02.jpeg";
import blog01 from "../../assets/wood12.jpeg";
import blog02 from "../../assets/wood17.jpeg";
import blog03 from "../../assets/wood23.jpeg";
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
      <div className="container" id="about-page-box"></div>
      <div className="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div id="history-card">
              <h2>Who Are We ?</h2>
              <p>
                At <b>ELITECAPENTRY</b>, we are a team of skilled carpenters
                with a passion for crafting and transforming spaces. With years
                of experience in the carpentry industry, we specialize in
                creating high-quality, custom woodwork for residential and
                commercial projects that meet the unique needs of our clients.
                Our approach combines traditional craftsmanship with modern
                techniques, ensuring that every project reflects our commitment
                to excellence. Whether we're building bespoke furniture,
                installing intricate woodwork, or renovating existing spaces, we
                bring the same dedication and attention to detail to every job.
              </p>
              <p>
                Our core values of integrity, reliability, and customer
                satisfaction guide everything we do. We believe that clear
                communication, transparency, and a client-focused approach are
                essential to the successful delivery of each project. From the
                initial consultation to the finishing touches, we collaborate
                closely with you at every step to make sure your vision is
                brought to life. At <b>ELITECAPENTRY</b>, we take pride in
                building lasting relationships with our clients, founded on
                trust and the successful completion of high-quality carpentry
                projects that stand the test of time.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div id="history-cardB">
              <img src={aboutus} alt="aboutbanner" />
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="about-team-card">
        <h2>Meet Our Team Of Experts</h2>
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div id="team-card">
              <img src={person01} alt="person" />
              <h6> Engineer</h6>
              <div id="team-card-icons">
                <MdOutlinePhone id="team-icons" />
                <AiOutlineWhatsApp id="team-icons" />
                <MdOutlineMail id="team-icons" />
              </div>
              <p>James Doe</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
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
          <div class="col-lg-4 col-md-12">
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
                Expert Craftsmanship
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                With years of experience in carpentry, our skilled craftsmen
                bring precision, care, and expertise to every project. We take
                pride in creating custom woodwork that’s built to last and
                designed to enhance the beauty and functionality of your space.
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
                Tailored Solutions
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                Every project is unique, and we specialize in providing tailored
                solutions that meet your specific needs and preferences. Whether
                it’s a bespoke furniture piece or a full renovation, we work
                closely with you to bring your vision to life.
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
                High-Quality Materials
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                We only use the finest materials in every project to ensure
                durability, safety, and aesthetic appeal. Our commitment to
                quality means that your woodwork will not only look great but
                also stand the test of time.
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
                Attention to Detail
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                We understand that it’s the little things that make a big
                difference. From precise measurements to flawless finishes, we
                pay attention to every detail to ensure your project exceeds
                expectations.
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
                Reliable and Professional Service
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{ color: "#f1975b" }}>
                At ELITECAPENTRY, we pride ourselves on being punctual,
                professional, and dependable. You can count on us to complete
                your project on time, within budget, and with minimal disruption
                to your daily life
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="blogs-section">
        <h2>Blogs</h2>
        <div class="row">
          <div class="col-md-4 col-md-6">
            <div id="blog-card">
              <img src={blog02} alt="aboutbanner" />
              <h4>The Importance of Quality Carpentry in Home Renovations</h4>
              <p>
                When renovating your home, quality carpentry can make all the
                difference. In this blog, we’ll discuss why choosing skilled
                carpenters for your renovation project is crucial to achieving
                lasting results. From structural integrity to aesthetic appeal,
                discover how professional carpentry ensures your renovations
                stand the test of time.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-md-6">
            <div id="blog-card">
              <img src={blog01} alt="aboutbanner" />
              <h4>How to Care for Your Custom Woodwork</h4>
              <p>
                Proper care can ensure your custom woodwork lasts for years to
                come. In this blog, we’ll share essential tips on cleaning,
                maintaining, and preserving your wooden furniture and
                installations. Learn how to protect your investment and keep
                your carpentry looking as good as new.
              </p>
            </div>
          </div>
          <div class="col-md-4 col-md-6">
            <div id="blog-card">
              <img src={blog03} alt="aboutbanner" />
              <h4>The Benefits of Bespoke Carpentry for Your Home</h4>
              <p>
                Wondering if custom carpentry is right for you? In this post,
                we’ll highlight the advantages of bespoke woodwork, including
                unique designs, space optimization, and personalized
                craftsmanship. Discover why more homeowners are choosing custom
                carpentry to elevate their living spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
