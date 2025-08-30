import React from 'react';
import './Enquiry.css';
import rect from '../../assets/rectangle30.png';
import Button from '../Button/Button';
import Second from '../Secondmiddle/Second';

function ContactFormSection() {
  return (
    <>
    <Second/><br></br>
    <div className="contact-section-container">
      {/* Left side: The Form */}
      <div className="form-column">
        <form className="contact-form">

          {/* Row 1: Email + Radios */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" />
            </div>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="serviceType" value="houseCleaning" defaultChecked />
                House Cleaning
              </label>
              <label className="radio-option1">
                <input type="radio" name="serviceType" value="commercialCleaning" />
                Commercial Cleaning
              </label>
            </div>
          </div>

          {/* Row 2: Name + Radio */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your answer" />
            </div>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="serviceType" value="outdoorCleaning" />
                Outdoor Cleaning
              </label>
            </div>
          </div>

          {/* Row 3: Phone + Other */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input type="tel" id="phoneNumber" placeholder="Your answer" />
            </div>
            <div className="form-group1">
              <label htmlFor="other">Other</label>
              <input type="text" id="other" placeholder="Your answer" />
            </div>
          </div>

          {/* Row 4: Company + Address */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <textarea id="company" placeholder="Your answer"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" placeholder="Your answer"></textarea>
            </div>
          </div>
<div className='new'> <Button variant="book">Submit</Button></div>
         
        </form>
      </div>

      {/* Right side: The Image */}
      <div className="image-column">
        <img
          src={rect}
          alt="Woman cleaning a table"
          className="cleaning-image"
        />
      </div>
    </div>
    </>
  );
}

export default ContactFormSection;
