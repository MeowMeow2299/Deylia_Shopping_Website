// Footer.jsx
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p className="sp">DEYLIA</p>
      </div>
      <div className="footer__top">
        <div className="footer__column">
          <h4>About Us</h4>
          <ul>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Customer Service</h4>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">How to Order</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} DEYLIA shopping website. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
