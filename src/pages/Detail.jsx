import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Detail.scss";
import detaildata from "../api/detaildata";
import { motion } from "framer-motion";
import { useCart } from "../contexts/CartContext";
import { toast, ToastContainer } from "react-toastify";
import useScrollReveal from "../hooks/useScrollReveal";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = detaildata.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const colors = Array.isArray(product.color) ? product.color : [product.color];
  const [ref, isVisible] = useScrollReveal();
  const { setBuyNowItem } = useCart();
  if (!product) return <p>Can't find products</p>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error(`Please choose "${product.size}" and "${product.color}" `, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
    });
    toast.success(`🎉 Add "${product.name}" vào giỏ hàng!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize) {
      toast.error(`Please choose "${product.size}" and "${product.color}" `, {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    const itemToBuy = {
      ...product,
      selectedColor,
      selectedSize,
      quantity: 1,
    };
    setBuyNowItem(itemToBuy);
    navigate("/checkout");
  };

  return (
    <div ref={ref} className={`scroll-reveal ${isVisible ? "show" : ""}`}>
      <motion.div
        className="detail-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/products">
          <button className="back">Back to products</button>
        </Link>

        <div className="product-detail-container">
          <div className="left">
            <Slider {...settings}>
              {product.image.map((img, idx) => (
                <div key={idx}>
                  <img src={`/${img}`} alt={`Hình ${idx + 1}`} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="right">
            <h1>{product.name}</h1>
            <p className="price">{product.price.toLocaleString()}</p>

            <div className="options">
              <div>
                <p>Size</p>
                {product.size.map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? "selected" : ""}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}

                <p>Color</p>
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={
                      selectedColor === color
                        ? "color-btn selected"
                        : "color-btn"
                    }
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <p className="desc">{product.description}</p>
            <button className="buy-btn" onClick={handleAddToCart}>
              Add to cart
            </button>
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>{" "}
      <ToastContainer />;
    </div>
  );
}

export default Detail;
