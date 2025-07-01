import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
 const [cartItems, setCartItems] = useState(() => {
  const saved = localStorage.getItem("cartItems");
  return saved ? JSON.parse(saved) : [];
});

  const [buyNowItem, setBuyNowItem] = useState(null);
const itemsToRender = buyNowItem ? [buyNowItem] : cartItems;

  const addToCart = (product) => {
    if (!product || !product.id || !product.price) {
      console.warn("🚨 Sản phẩm không hợp lệ khi thêm vào giỏ:", product);
      return;
    }

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === product.size &&
          item.color === product.color
      );

      if (existingIndex !== -1) {
        // Tăng số lượng nếu sản phẩm đã có
        const updatedItems = [...prevItems];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1,
        };
        return updatedItems;
      } else {
        // Thêm sản phẩm mới với quantity = 1 và mặc định selected = true
        return [...prevItems, { ...product, quantity: 1, selected: true }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const toggleSelect = (id) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    )
  );
};
useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleSelect,
         buyNowItem,
        setBuyNowItem,
      setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
