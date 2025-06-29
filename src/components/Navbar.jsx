import { useState } from "react";
import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <nav className="navbar">
      <div className="navbar_left">
        <span>💖DEYLIA💖</span>
      </div>
      <div className="navbar_center">
        <a href="/">Home</a>
        <a href="/productlist">Newbie to 12 months</a>
        <a href="/products">1 year to 5 years</a>
        <a href="/allproduct">All Products</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar_right">
        <Link to="/cart">
          <span className="navbar_icon">🛒</span>
        </Link>

        {/* Avatar trigger */}
        <button className="navbar_avatar" onClick={toggleSidebar}></button>
      </div>

      {/* Sidebar nằm ngoài nav nhưng trong cùng return */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="sidebar_close" onClick={toggleSidebar}>
          ×
        </button>
        <nav className="sidebar_content">
          <div className="sidebar_greeting">
            <h3>Hi, Mom 👋</h3>
            <p>Your journey with Deylia starts here.</p>
          </div>

          <ul>
            <li>
              <a href="#">
                <span>👩‍👧</span> Account Overview
              </a>
            </li>
            <li>
              <a href="#">
                <span>💖</span> Points & Rewards
              </a>
            </li>
            <li>
              <a href="#">
                <span>🛍️</span> My Orders
              </a>
            </li>
            <li>
              <a href="#">
                <span>🎀</span> Wishlist
              </a>
            </li>
            <li>
              <a href="#">
                <span>🍼</span> Recently Viewed
              </a>
            </li>
            <li>
              <a href="#">
                <span>⚙️</span> Account Settings
              </a>
            </li>
            <li>
              <a href="#">
                <span>🚪</span> Log Out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
