import React from "react";
import "./Footer.css";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid" id="footer-page">
      <h4>Get In Touch With Us</h4>
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div id="footer-page-card">
            <h5>
              <GrLocation /> Address
            </h5>
            <p>
              8 Hillside Road Braamfontein<br></br>1st Floor, Block B,<br></br>  Metropolitan ParkTown<br></br> Johannesburg
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="footer-page-card">
            <h5>
              <HiOutlineMail /> Emails
            </h5>
            <p>
              info@tshoshanegroup.co.za<br></br>
              lesibaless@yahoo.co.za<br></br> 
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div id="footer-page-card">
            <h5>
              <MdOutlinePhone /> Phone
            </h5>
            <p>
            +2761 318 3551<br></br> +2776 049 4736 <br></br>
             
            </p>
          </div>
        </div>
      </div>
      <div id="footer-icons-cards" className="container">
        <div>
          <FiFacebook id="footer-icon"/>
          <FaInstagram id="footer-icon"/>
          <RiTiktokLine id="footer-icon"/>
          <FaWhatsapp id="footer-icon"/>
        </div>
        <div id="footer-rtys">
          <small>
            {" "}
            &copy; TSHOSHANE GROUP 2025.
        
          </small>
          <p style={{textAlign:"center", fontSize:"14px", color:"#f1975b53"}}>Crafted by: <a href="https://wa.me/27677366141" target="_blank" style={{color:"#f1975b53"}}>
            chimbo
            </a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
