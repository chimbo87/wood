import React from "react";
import work01 from "../../assets/work01.jpeg";
import work02 from "../../assets/work02.jpeg";
import work03 from "../../assets/work03.jpeg";
import work04 from "../../assets/work04.jpeg";
import work05 from "../../assets/work05.jpeg";
import work06 from "../../assets/work06.jpeg";
import work07 from "../../assets/work07.jpeg";
import work08 from "../../assets/work08.jpeg";
import work09 from "../../assets/work09.jpeg";
import work10 from "../../assets/work10.jpeg";
import work11 from "../../assets/work11.jpeg";
import work12 from "../../assets/work12.jpeg";
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
              <img src={work01} alt="workbanner" />
              <small>Double Storey Construction</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work02} alt="workbanner" />
              <small>Drainage Construction</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work03} alt="workbanner" />
              <small>Double Storey Construction</small>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 col-md-4">
            <div id="our-work-card">
              <img src={work10} alt="workbanner" />
              <small>Floor Tiles</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work05} alt="workbanner" />
              <small>Road Construstion</small>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work06} alt="workbanner" />
              <small>House Rennovation</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work05} alt="workbanner" />
              <small>Road Construction</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work09} alt="workbanner" />
              <small>Plumbing</small>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work07} alt="workbanner" />
              <small>Double Storey Construction</small>
            
            </div>
          </div>
          <div class="col-lg-8 col-md-4">
            <div id="our-work-card">
              <img src={work08} alt="workbanner" />
              <small>Bathrooms</small>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work11} alt="workbanner" />
              <small>Pavements</small>
            
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work12} alt="workbanner" />
              <small>Walls</small>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="our-work-card">
              <img src={work08} alt="workbanner" />
              <small>Bathrooms</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
