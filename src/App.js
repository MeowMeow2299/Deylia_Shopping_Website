import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from './pages/Success';
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import "./style/variables.scss";
import "./style/layout.scss";
import ProductCard from "./components/ProductCard";
import Detail from "./pages/Detail";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Allproduct from "./pages/Allproduct";


function App() {
   const [isSidebarOpen, setSidebarOpen] = useState(false);
    
   return (
    <Router>
     <div className={`main-content ${isSidebarOpen ? "shifted" : ""}`}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/product-card" element={<ProductCard />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/title" element={<Title />} />
         <Route path="/allproduct" element={<Allproduct />} />


        </Routes>
      </div>
      </div>
      <Footer/>
      </Router>
  );
}

export default App;
