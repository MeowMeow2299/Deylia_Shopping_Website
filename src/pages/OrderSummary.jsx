import React from 'react';
import './OrderSummary.scss';

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <ul>
        <li><span>Lavender Hoodie</span><span>$45</span></li>
        <li><span>Pink Water Bottle</span><span>$25</span></li>
      </ul>
      <div className="total">
        <strong>Total:</strong> <span>$70</span>
      </div>
    </div>
  );
};

export default OrderSummary;