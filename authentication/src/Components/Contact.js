import React from "react";
import "../Styles/contact.css";

export default function Contact() {
  return (
    <div className="c-container">
      <div className="contact-container">
        <div className="name-container">
          <div className="label">Name : </div>
          <input type="name" placeholder="enter your name" className="input" />
        </div>
        <div className="email-container">
          <div className="label">Email : </div>
          <input
            type="email"
            placeholder="enter your email"
            className="input"
          />
        </div>
        <div className="mobile-container">
          <div className="label">Mobile No. : </div>
          <input
            type="text"
            placeholder="enter your mobile no."
            className="input"
          />
        </div>
        <div className="address-container">
          <div className="label">Address : </div>
          <input
            type="address"
            placeholder="enter your address"
            className="input"
          />
        </div>
        <div className="submit-btn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}
