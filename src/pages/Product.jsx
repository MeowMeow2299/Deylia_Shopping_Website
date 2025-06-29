import React, { useState } from "react";
import "./Product.scss";
import ProductCard from "../components/ProductCard";
import data from "../api/data";
import Sidebar from "../components/Sidebar";
import useScrollReveal from "../hooks/useScrollReveal";
import dall from "../api/dall";

const Product = () => {
  const [ref, isVisible] = useScrollReveal();
  const [selectedColor, setSelectedColor] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const filteredProducts = dall
  .filter((item) =>
     selectedColor === "all"
    ? true
    : Array.isArray(item.color)
      ? item.color.includes(selectedColor)
      : item.color === selectedColor
  )
  .sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });


  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? "show" : ""}`}>
      <h1 className="title">1 - 5 years</h1>
      <div className="filter-bar">
        <select
          onChange={(e) => setSelectedColor(e.target.value)}
          value={selectedColor}
        >
          <option value="all">All color</option>
          <option value="Black">Black</option>
          <option value="White Coral">White Coral</option>
          <option value="White">White</option>
          <option value="Yellow">Yellow</option>
        </select>

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="default">Normal</option>
          <option value="asc">Price: Low → Hight</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>
      <div className="product-page">
        <div className="content">
          <div className="product-grid">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
