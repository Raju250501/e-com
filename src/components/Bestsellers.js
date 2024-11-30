import React from "react";

const bestsellers = [
  {
    id: 1,
    name: "Product 1",
    image: "",
    price: "$20",
  },
  {
    id: 2,
    name: "Product 2",
    image: "",
    price: "$25",
  },
];

function Bestsellers() {
  return (
    <div className="bestsellers">
      <h2>Bestseller Products</h2>
      <div className="product-list">
        {bestsellers.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn">View All Products</button>
    </div>
  );
}

export default Bestsellers;
