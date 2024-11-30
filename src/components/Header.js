import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingCart,
  faUser,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
          <span className="phone-number">+91 8438330214</span>
        </div>
        <div className="language-selector">
          <img
            src="https://flagcdn.com/w40/us.png"
            alt="US Flag"
            className="flag-icon"
          />
          <span>English</span>
          <span className="dropdown-icon">▼</span>
        </div>
      </div>

      {/* Middle Bar */}
      <div className="middle-bar">
        <div className="logo">
          <img
            src="https://via.placeholder.com/150x50?text=NOON+HERB"
            alt="Noon Herb Logo"
          />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for items..." />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="user-actions">
          {/* Wishlist */}
          <div className="icon-container">
            <div className="badge">0</div>
            <div className="icon-circle">
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
          </div>
          {/* User */}
          <div className="icon-container">
            <div className="icon-circle" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/login">
                  <button>Login</button>
                </Link>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </div>
            )}
          </div>
          {/* Cart */}
          <div className="icon-container cart-container">
            <div className="badge">0</div>
            <div className="icon-circle">
              <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </div>
            <div className="cart-text">
              My cart <span className="cart-price">₹0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navigation-bar">
        <div className="category-dropdown">
          <FontAwesomeIcon icon={faSearch} />
          <span>Categories</span>
          <span className="dropdown-icon">▼</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Brand</li>
          <li>Discounted Products</li>
          <li>All Vendors</li>
          <li>Vendor Zone</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
