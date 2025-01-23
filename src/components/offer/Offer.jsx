import React from "react";
import "./Offer.css";
import { MdOutlineEngineering } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdOutlineHomeWork } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Offer() {
  const navigate = useNavigate();
  return (
    <div id="offer-container" className="container">
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div id="offer-card-box">
            <h5>Build Your Dreams</h5>
            <h1>Over 10 Years of Undefeated Successs</h1>
            <p>
              For over a decade, our carpentry business has built a reputation
              for delivering exceptional woodworking projects with unwavering
              craftsmanship and expertise. Our success is driven by our
              relentless focus on quality, client satisfaction, and innovative
              design. Throughout the years, we have earned the trust of our
              clients by consistently exceeding expectations and completing
              custom woodwork on time and within budget. This track record of
              undefeated success is a testament to our team's dedication to
              excellence and our ability to transform raw wood into masterful
              creations that showcase our skill and reliability.
            </p>
            <button
              onClick={() => {
                navigate("/about");
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-md-4">
          <div id="offer-card">
            <div id="offer-inner-card">
              <div id="offer-inner-cardwrap">
                <MdOutlineEngineering id="offer-inner-wrapicon" />
                <h2>1000 +</h2>
                <p>Completed Projects</p>
              </div>
              <div id="offer-inner-cardwrap">
                <FaRegCalendarAlt id="offer-inner-wrapicon" />
                <h2>10 +</h2>
                <p>Years of Experience</p>
              </div>
            </div>
            <div id="offer-inner-card">
              <div id="offer-inner-cardwrap">
                <FaUsers id="offer-inner-wrapicon" />
                <h2>500 +</h2>
                <p>Happy Customers</p>
              </div>
              <div id="offer-inner-cardwrap">
                <MdOutlineHomeWork id="offer-inner-wrapicon" />
                <h2>10 +</h2>
                <p>Branches Around</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
