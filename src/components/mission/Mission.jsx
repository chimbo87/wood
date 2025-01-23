import React from "react";
import building from "../../assets/building.jpeg";
import project from "../../assets/project.jpeg";
import renovation from "../../assets/renovation.jpeg";
import { useNavigate } from "react-router-dom";
import "./Mission.css";


function Mission() {
  const navigate = useNavigate();
  return (
    <div className="container" id="mission-container">
      <h2><span></span>What We Do</h2>
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div id="mission-card">
            <img src={building} alt="building" />
            <div id="mission-card-btn">
              {" "}
              <h6>Skirting</h6> <button onClick={() => {
                  navigate("/services");
                }}>Read more</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="mission-card">
            <img src={project} alt="project" />
            <div id="mission-card-btn">
              {" "}
              <h6>Refurbishment</h6> <button  onClick={() => {
                  navigate("/services");
                }}>Read more</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="mission-card">
            <img src={renovation} alt="building" />
            <div id="mission-card-btn">
              {" "}
              <h6>Laminated Floor</h6> <button  onClick={() => {
                  navigate("/services");
                }}>Read more</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="mission-card">
            <img src={renovation} alt="building" />
            <div id="mission-card-btn">
              {" "}
              <h6>Decking</h6> <button  onClick={() => {
                  navigate("/services");
                }}>Read more</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="mission-card">
            <img src={renovation} alt="building" />
            <div id="mission-card-btn">
              {" "}
              <h6>Painting</h6> <button  onClick={() => {
                  navigate("/services");
                }}>Read more</button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="mission-card">
            <img src={renovation} alt="building" />
            <div id="mission-card-btn">
              {" "}
              <h6> Doors & Windows</h6> <button  onClick={() => {
                  navigate("/services");
                }}>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
