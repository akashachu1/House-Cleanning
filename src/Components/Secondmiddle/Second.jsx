import React from 'react';
import "./Second.css"
import Background from "../../assets/Background.png";
import Background1 from '../../assets/Background1.png';
import Background2 from '../../assets/Background2.png';
import Middle from "../middle/middle";




function Second() {
return (
  <>
    <Middle/><br></br>
    <div className="why-choose-us-section">
      <h2 className="section-title">Why Choose Us?</h2>
      <p className="section-subtitle">PLANS</p>

      <div className="plans-container">
        {/* House Cleaning Card */}
        <div className="plan-card">
          <img className="im" src={Background} alt="cleaning" />
          <div className="plan-overlay">
            <h3 className="plan-title">House Cleaning</h3>
            <p className="plan-description">General surface cleaning, dusting, vacuuming, mopping, and trash removal.</p>
            <p className="plan-duration">4 Hours</p>
          </div>
        </div>

        {/* Commercial Cleaning Card */}
        <div className="plan-card">
          <img className="im" src={Background1} alt="cleaning" />
          <div className="plan-overlay">
            <h3 className="plan-title">Commercial Cleaning</h3>
            <p className="plan-description">Dusting workstations, sanitizing high-touch areas, vacuuming carpets, mopping floors, and cleaning restrooms.</p>
            <p className="plan-duration">3-4 Hours</p>
          </div>
        </div>

        {/* Outdoor Cleaning Card */}
        <div className="plan-card">
          <img className="im" src={Background2} alt="cleaning" />          
          <div className="plan-overlay">
            <h3 className="plan-title">Outdoor Cleaning</h3>
            <p className="plan-description">Sweeping walkways, pressure washing surfaces, removing debris, cleaning windows, and tidying garden areas.</p>
            <p className="plan-duration">3-4 Hours</p>
          </div>
        </div>
      </div>
    </div>
  </>
);
}

export default Second;