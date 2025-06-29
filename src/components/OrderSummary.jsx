// src/components/OrderSummary.jsx
import React from "react";
import"../components/OrderSummary.scss";

const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((sum, item) => {
    const cleanPrice = parseInt(item.price.replace(/[^\d]/g, ""));
    return sum + cleanPrice * (item.quantity || 1);
  }, 0);

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="order-summary">
      <h2 className="order">Order Summary</h2>
      {cartItems.map((item) => (
        <div className="summary-item" key={item.id}>
          <img
            src={
              item.image.startsWith(".")
                ? item.image.replace(".", "/")
                : item.image
            }
            alt={item.name}
          />
          <div>
            <p>{item.name}</p>
            <p>
              x{item.quantity || 1} –{" "}
              {(parseInt(item.price.replace(/[^\d]/g, "")) * (item.quantity || 1)).toLocaleString("vi-VN")} đ
            </p>
          </div>
        </div>
      ))}
      <hr />
      <p>Subtotal: <strong>{subtotal.toLocaleString("vi-VN")} VNĐ</strong></p>
      <p>Shipping: <strong>{shipping === 0 ? "Free" : shipping.toLocaleString("vi-VN") + " VNĐ"}</strong></p>
      <h3>Total: <strong>{total.toLocaleString("vi-VN")} VNĐ</strong></h3>

      <button className="place-order-btn">Place Order</button>
    </div>
  );
};


export default OrderSummary;
