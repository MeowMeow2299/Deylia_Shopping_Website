import React from "react";
import "./Title.scss";
import { Link } from "react-router-dom";

const Title = ({ product }) => (
    <Link to={`/title/${product.id}`} className="product-card">
  <div>
    <img src={product.image} alt={product.name} />
  </div>
  </Link>
);

export default Title;