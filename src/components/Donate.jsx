"use client"

import React from "react";
import "./Donate.css"; // Create a corresponding CSS file for styling

const Donate = () => {
  return (
    <section className="donate-section">
      <h2 className="section-title">Support Our Mission</h2>
      <p>Your generous donations help us continue our work in the community. Thank you for your support!</p>
      
      <div className="donate-options">
        <h3>Choose a Donation Method:</h3>
        <div className="donate-methods">
          <button className="donate-button">UPI</button>
          <button className="donate-button">NEFT/RTGS</button>
          <button className="donate-button">Cheque</button>
        </div>
      </div>
      
      <div className="donate-qr">
        <h3>Scan to Donate</h3>
        <img src="/qr-code.png" alt="QR Code for Donation" />
      </div>
    </section>
  );
};

export default Donate; 