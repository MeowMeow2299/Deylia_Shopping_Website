// src/components/OrderSummary.jsx
import React from "react";
import "../components/OrderSummary.scss";

const OrderSummary = ({ cartItems }) => {
  const subtotal = cartItems.reduce((sum, item) => {
    const cleanPrice = parseInt(
      typeof item.price === "string"
        ? item.price.replace(/[^\d]/g, "")
        : item.price
    );
    return sum + cleanPrice * (item.quantity || 1);
  }, 0);

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="order-summary">
      <h2 className="order">Order Summary</h2>

      {cartItems.map((item) => {
        const imageSrc =
          typeof item.image === "string"
            ? item.image.startsWith(".")
              ? item.image.replace(".", "/")
              : item.image
            : "/img.webp"; // fallback ảnh nếu bị lỗi

        const quantity = item.quantity || 1;
        const cleanPrice = parseInt(
          typeof item.price === "string"
            ? item.price.replace(/[^\d]/g, "")
            : item.price
        );
        const totalPrice = cleanPrice * quantity;

        return (
          <div className="summary-item" key={item.id}>
             <img
                    src={
                      item.image && item.image[0]
                        ? `${process.env.PUBLIC_URL}${item.image[0]}`
                        : "/default.png"
                    }
                    alt={item.name}
                    className="cart_item-img"
                  />
            <div>
              <p>{item.name}</p>
              <p>
                x{quantity} – {totalPrice.toLocaleString("vi-VN")} đ
              </p>
            </div>
          </div>
        );
      })}

      <hr />
      <p>
        Subtotal:{" "}
        <strong>{subtotal.toLocaleString("vi-VN")} VNĐ</strong>
      </p>
      <p>
        Shipping:{" "}
        <strong>
          {shipping === 0 ? "Free" : shipping.toLocaleString("vi-VN") + " VNĐ"}
        </strong>
      </p>
      <h3>
        Total: <strong>{total.toLocaleString("vi-VN")} VNĐ</strong>
      </h3>

      <button className="place-order-btn">Continue Order</button>
    </div>
  );
};

export default OrderSummary;
