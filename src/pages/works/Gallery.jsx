import React from "react";
import work01 from "../../assets/wood07.jpeg";
import work02 from "../../assets/wood08.jpeg";
import work03 from "../../assets/wood09.jpeg";
import work04 from "../../assets/wood10.jpeg";
import work05 from "../../assets/wood11.jpeg";
import work06 from "../../assets/wood12.jpeg";
import work07 from "../../assets/wood13.jpeg";
import work08 from "../../assets/wood14.jpeg";
import work09 from "../../assets/wood15.jpeg";
import work10 from "../../assets/wood16.jpeg";
import work11 from "../../assets/wood17.jpeg";
import work12 from "../../assets/wood18.jpeg";
import work13 from "../../assets/wood19.jpeg";
import work14 from "../../assets/wood20.jpeg";
import work15 from "../../assets/wood21.jpeg";
import work16 from "../../assets/wood22.jpeg";
import work17 from "../../assets/wood23.jpeg";
import work18 from "../../assets/wood24.jpeg";
import work19 from "../../assets/wood25.jpeg";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <div className="container-fluid" id="work-page">
        <h2>Our Works</h2>
      </div>
      <div className="container">
      <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work16} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work17} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work18} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
        </div>
      

        <div class="row">
          <div class="col-lg-8 col-md-4">
            <div id="our-work-card">
              <img src={work04} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work05} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work06} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work07} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work08} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work09} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            
            </div>
          </div>
          <div class="col-lg-8 col-md-4">
            <div id="our-work-card">
              <img src={work10} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work11} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work12} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work13} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="our-work-card">
              <img src={work14} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="our-work-card">
              <img src={work15} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
       
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work01} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work02} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work03} alt="workbanner" />
              <small>Lorem ipsum dolor sit amet consectetur adipisicing</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
