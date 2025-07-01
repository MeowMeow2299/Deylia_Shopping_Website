import React from "react";
import { useCart } from "../contexts/CartContext";
import "./Cart.scss";
import { Link } from "react-router-dom";
import useScrollReveal from "../hooks/useScrollReveal";
import { useNavigate } from "react-router-dom";
import dall from "../api/dall";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout", {
      state: { cartItems: dall },
    });
  };
   const location = useLocation();
  const newItem = location.state?.newItem;
 const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    if (newItem) {
      setCartItems((prev) => [...prev, newItem]);
    }
  }, [newItem]);
  const {removeFromCart, updateQuantity, toggleSelect } = useCart();
  const [ref, isVisible] = useScrollReveal();
 const getTotal = () =>
  cartItems.reduce((acc, item) => {
    const isSelected = item.selected !== false;

    const rawPrice = typeof item.price === "string" 
      ? item.price.replace(/[^\d]/g, "") // Xoá hết ký tự không phải số
      : item.price;

    const price = parseInt(rawPrice) || 0;
    const quantity = parseInt(item.quantity) || 0;

    return isSelected ? acc + price * quantity : acc;
  }, 0);


  console.log("🧺 Cart items:", cartItems);
  console.log("💰 Tổng tiền đã chọn:", getTotal());

  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? "show" : ""}`}>
      <section className="cart">
        <h2 className="cart_title">Cart Shopping</h2>
        <Link to="/products">
          <button className="back">Back to products</button>
        </Link>

        <div className="cart_content">
          <div className="cart_items">
            {cartItems.length === 0 ? (
              <p>Chưa có sản phẩm nào trong giỏ 😥</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="cart_item" key={index}>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelect(item.id)}
                  />

                  <img
                    src={`/${item.image?.[0] || "default.png"}`}
                    alt={item.name}
                    className="cart_item-img"
                  />
                  <div className="cart_item-details">
                    <h4>{item.name}</h4>
                    <p>Size: {item.size}</p>
                    <p>Color: {item.color}</p>
                    <p>{item.price.toLocaleString()}</p>
                    <div className="cart_actions">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                      <button
                        className="remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="cart_summary">
            <h4 className="summary">Order Summary</h4>
            <p>
              Subtotal:{" "}
              <strong>{getTotal().toLocaleString("vi-VN")} VNĐ</strong>
            </p>

            <p>Shipping:Free</p>
            <hr />
            <p>
              Total:{" "}
              <strong>{getTotal().toLocaleString("vi-VN")} VNĐ</strong>
            </p>

            <Link to="/checkout">
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
