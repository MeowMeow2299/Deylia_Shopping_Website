// src/components/CheckoutForm.jsx
import React from "react";
import"../components/CheckoutForm.scss";

const CheckoutForm = () => {
  return (
    <form className="checkout-form">
      <h2>Shipping Information</h2>
      <input type="text" placeholder="Full Name" required />
      <input type="tel" placeholder="Phone Number" required />
      <input type="text" placeholder="Delivery Address" required />
      <textarea placeholder="Order Note (optional)" rows="3" />
    </form>
  );
};

export default CheckoutForm;


