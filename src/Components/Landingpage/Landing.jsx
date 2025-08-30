import React from "react";
import "./Landing.css";
import Nav from "../NAVBAR/Nav";
import Button from "../Button/Button";
import img1 from "../../assets/ONE.png";
import img2 from "../../assets/two.png";
import img3 from "../../assets/three.png";

function Landing() {
  return (
    <>
      <Nav /><br></br>
      <div className="container-fluid">
        {/* Heading Box */}
        <div className="left-section">
          <div className="service-box">
            Professional Cleaning Services You Can Trust
          </div>

          {/* First paragraph */}
          <p className="title-text">Welcome To Renew Cleaning</p>

          {/* Second paragraph */}
          <p className="desc-text">
            We are a professional cleaning service company dedicated <br />
            to maintaining cleaner, healthier spaces for homes and <br />
            businesses across New York. Our mission is to deliver <br />
            exceptional services with integrity, efficiency and a <br />
            commitment to customer satisfaction.
          </p>

          {/* Buttons */}
          <div className="btn-group">
            <Button variant="book">Book Now</Button>
            <Button variant="view">View All</Button>
          </div>
        </div>
        {/* Images aligned right */}
        <div className="img-group">
          <img className="img1" src={img1} alt="cleaning" />
          <img className="img2" src={img2} alt="cleaning" />
          <img className="img3" src={img3} alt="cleaning" />
        </div>
      </div>
    </>
  );
}

export default Landing;
