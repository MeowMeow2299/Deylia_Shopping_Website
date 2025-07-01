import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import useScrollReveal from "../hooks/useScrollReveal";
import { Link } from "react-router-dom";
  
const Home = () => {
 const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "show" : ""}`}
    >
      <div className="home">
        <Link to="/products"><div className="slidenav">
          <Slider />
    <motion.section
  className="hero"
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
</motion.section>;
      </div></Link>
     
      <h1 className="maybe">Collection may be your child would like!</h1>
      <Link to="/products"><section className="features">
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/home1.png`} />

        </div>
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/home2.png`} />

        </div>
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/home3.png`} />

        </div>
        <div className="feature-card">
         <img src={`${process.env.PUBLIC_URL}/home4.png`} />

        </div>
      </section></Link>

      <h1 className="f0-12">0-12 months</h1>
       <Link to="/products"><section className="features">
        <div className="feature-card">
         <img src={`${process.env.PUBLIC_URL}/0-3months.png`} />

        </div>
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/3-6months.png`} />
        </div>
        <div className="feature-card">
         <img src={`${process.env.PUBLIC_URL}/6-9months.png`} />
        </div>
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/9-12months.png`} />
        </div>
      </section></Link>

      <h1 className="f1-5">1-5 years</h1>
       <Link to="/products"><section className="features">
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/1year.png`} />
        </div>
        <div className="feature-card">
         <img src={`${process.env.PUBLIC_URL}/2year.png`} />
        </div>
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/3years.png`} />
        </div>
        <div className="feature-card">
         <img src={`${process.env.PUBLIC_URL}/4years.png`} />
        </div>
        <div className="feature-card">
          <img src={`${process.env.PUBLIC_URL}/5years.png`} />
        </div>
      </section></Link>
    </div>
    </div>
  );
};

export default Home;
