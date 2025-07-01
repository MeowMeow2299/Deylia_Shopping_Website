import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
<div className="product-card">
  <Link to={`/detail/${product.id}`}>
    {product.image && <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.name} />
}

    <div className="product-info">
      <h4 className="product-name">{product.name}</h4>
      <p className="price">
        {product.price.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })}
      </p>
    </div>
  </Link>
</div>


  );
};

export default ProductCard;
