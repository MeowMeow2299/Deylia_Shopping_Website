// src/pages/CheckoutPage.jsx
import React from "react";
import CheckoutForm from "../components/CheckoutForm";
import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import "./Checkout.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
const Checkout = () => {
  const location = useLocation();
  const { cartItems, buyNowItem } = useCart();
  const itemsToRender = buyNowItem ? [buyNowItem] : cartItems;
  console.log("cartItems:", cartItems);
  console.log("buyNowItem:", buyNowItem);
  console.log("itemsToRender:", itemsToRender);
  return (
    <div className="checkout-page">
      <Link to="/cart">
        <button className="back">Back to cart</button>
      </Link>
      <div className="checkout-left">
        <CheckoutForm />
        <PaymentMethod />
      </div>
      <div className="checkout-right">
        <OrderSummary cartItems={itemsToRender} />
      </div>
    </div>
  );
};

export default Checkout;
