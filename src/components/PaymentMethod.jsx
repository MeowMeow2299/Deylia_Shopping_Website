// src/components/PaymentMethod.jsx
import React from "react";
import"../components/PaymentMethod.scss";
const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <h2>Payment Method</h2>
      <label>
        <input type="radio" name="method" defaultChecked />
        Cash on Delivery
      </label>
      <label>
        <input type="radio" name="method" />
        Credit/Debit Card
      </label>
      <label>
        <input type="radio" name="method" />
        MoMo / ZaloPay
      </label>
    </div>
  );
};

export default PaymentMethod;
