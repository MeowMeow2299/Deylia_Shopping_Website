// src/components/CheckoutForm.jsx
import React, { useState } from "react";
import "../components/CheckoutForm.scss";
import HCMAddressSelector from "../components/HCMAddressSelector";
const CheckoutForm = () => {
  const [address, setAddress] = useState({ district: "", ward: "" });
  return (
    <form className="checkout-form">
      <h2 className="info">Shipping Information</h2>

      <label>Full Name</label>
      <input type="text" placeholder="Enter your full name" required />

      <label>Phone Number</label>
      <input type="tel" placeholder="Enter your phone number" required />

      <label>Address</label>
      <div className="address-group">
        <HCMAddressSelector onChange={(addr) => setAddress(addr)} />
      <p>Select: {address.ward}, {address.district}</p>
      </div>

      <label>Detailed Address</label>
      <input type="text" placeholder="Street name, house number..." required />

      <label>Order Note (Optional)</label>
      <textarea placeholder="Any notes for your order" rows="3" />

      </form>
  );
};

export default CheckoutForm;


