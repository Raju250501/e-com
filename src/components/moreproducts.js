import React, { useState } from "react";
import "./moreproducts.css";

const products = [
  {
    id: 1,
    image: "/image/photo.jpg",
    name: "Healthmix 12...",
    price: "₹375.00",
  },
  {
    id: 2,
    image: "/image/photo.jpg",
    name: "Baby Healthmix...",
    price: "₹325.00",
  },
  { id: 3, image: "/image/photo.jpg", name: "Shilajit", price: "₹999.00" },
  {
    id: 4,
    image: "/image/photo.jpg",
    name: "PH-PCOD/PCOS Cure...",
    price: "₹555.00",
  },
  {
    id: 5,
    image: "/image/photo.jpg",
    name: "Shilajit Shake...",
    price: "₹882.00",
  },
  { id: 6, image: "/image/photo.jpg", name: "Sunflower Oil", price: "₹455.00" },
  { id: 7, image: "/image/photo.jpg", name: "Herbal Tea...", price: "₹300.00" },
  {
    id: 8,
    image: "/image/photo.jpg",
    name: "Energy Booster...",
    price: "₹700.00",
  },
];

const MoreProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(6); // Show 6 products initially

  const handleViewMore = () => {
    setVisibleProducts(products.length); // Show all products
  };

  return (
    <div className="featured-products">
      {/* Header Section */}
      <div className="header1">
        <h2>More Products</h2>
        {visibleProducts < products.length && (
          <button className="view-all" onClick={handleViewMore}>
            View More &gt;
          </button>
        )}
      </div>

      {/* Products Grid */}
      <div className="products-grid">
        {products.slice(0, visibleProducts).map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
