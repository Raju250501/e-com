import React from "react";
import Slider from "react-slick";

import "./Banner.css";

const App = () => {
  const images = [
    { url: "/image/photo.jpg", link: "#" },
    { url: "/image/photo2.jpg", link: "#" },
    { url: "/image/photo.jpg", link: "#" },
    { url: "/image/photo2.jpg", link: "#" },
    { url: "/image/photo.jpg", link: "#" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="container">
      {/* Left Sidebar */}
      <div className="menu">
        <ul>
          <li>Supplements</li>
          <li>Others</li>
          <li>Herbal Supplements</li>
          <li>Herbal Teas</li>
          <li>Essential Oils</li>
          <li>Herbal Extracts & Tinctures</li>
          <li>Topical Herbal Products</li>
          <li>Culinary Herbs & Spices</li>
          <li>Herbal Capsules & Tablets</li>
        </ul>
      </div>

      {/* Right Carousel */}
      <div className="carousel">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default App;
