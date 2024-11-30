import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img src="/path-to-logo.png" alt="Noon Herb Logo" className="logo" />
        </div>
        <div className="download-section">
          <h4>DOWNLOAD OUR APP</h4>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/path-to-google-play-icon.png"
              alt="Google Play"
              className="play-store-icon"
            />
          </a>
        </div>
        <div className="links-section">
          <div>
            <h4>SPECIAL</h4>
            <ul>
              <li>Featured Products</li>
              <li>Latest Products</li>
              <li>Best Selling Products</li>
              <li>Top Rated Products</li>
            </ul>
          </div>
          <div>
            <h4>ACCOUNT & SHIPPING INFO</h4>
            <ul>
              <li>Profile Info</li>
              <li>Wish List</li>
              <li>Track Order</li>
              <li>Refund Policy</li>
              <li>Return Policy</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>
        </div>
        <div className="contact-section">
          <h4>Start A Conversation</h4>
          <p>📞 +91 8438330214</p>
          <p>📧 support@noonherb.in</p>
          <p>
            🗂 <a href="#3">Support Ticket</a>
          </p>
        </div>
        <div className="newsletter-section">
          <h4>NEWSLETTER</h4>
          <p>Subscribe to our new channel to get the latest updates</p>
          <form>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright Meerana@2024</p>
        <div>
          <a href="#1">Terms & Conditions</a> | <a href="#2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
