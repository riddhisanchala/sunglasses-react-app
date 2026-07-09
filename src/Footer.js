// Footer.jsx

import React from "react";
import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT CONTENT */}
        <div className="footer-left">
          <h1>Buy Eyewear from Eyeclic</h1>

          <p>
            Eyeclic is an eyewear company focused on making good vision easy
            and affordable for everyone. We use technology to improve how
            eyewear is supplied and delivered. Our products include
            prescription glasses, sunglasses, contact lenses, and accessories,
            all designed to suit different needs and styles.
          </p>

          <div className="footer-links">
            {/* COLUMN 1 */}
            <div>
              <h3>CATEGORIES</h3>

              <ul>
                <li>Eyeglasses</li>
                <li>Sunglasses</li>
                <li>Screen Glasses</li>
                <li>Reading Glasses</li>
                <li>Contact Lenses</li>
                <li>Accessories</li>
              </ul>
            </div>

            {/* COLUMN 2 */}
            <div>
              <h3>BRANDS</h3>

              <ul>
                <li>EyeClic</li>
                <li>Fila</li>
                <li>Globus</li>
                <li>CK</li>
                <li>Opium</li>
                <li>Ray-Ban</li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div>
              <h3>SUPPORT</h3>

              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Customer Support</li>
                <li>Maintenance Guide</li>
                <li>Frame Size Guide</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <div className="app-buttons">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="app-store"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="play-store"
            />
          </div>

          <p>
            Download Eyeclic App to buy Eyeglasses,
            <br />
            Sunglasses and Contact Lenses
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="bottom-left">
          <span>T&C</span>
          <span>Privacy</span>
        </div>

        <div className="bottom-right">
          <span>Version 1.0.0 || Follow Us</span>

          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />

          <button className="top-btn">
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;