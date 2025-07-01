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
        <Link to="./products"><div className="slidenav">
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
      <Link to="./products"><section className="features">
        <div className="feature-card">
          <img src="./home1.png"></img>
        </div>
        <div className="feature-card">
          <img src="./home2.png"></img>
        </div>
        <div className="feature-card">
          <img src="./home4.png"></img>
        </div>
        <div className="feature-card">
          <img src="./home5.png"></img>
        </div>
      </section></Link>

      <h1 className="f0-12">0-12 months</h1>
       <Link to="./products"><section className="features">
        <div className="feature-card">
          <img src="./0-3months.png"></img>
        </div>
        <div className="feature-card">
          <img src="./3-6months.png"></img>
        </div>
        <div className="feature-card">
          <img src="./6-9months.png"></img>
        </div>
        <div className="feature-card">
          <img src="./9-12months.png"></img>
        </div>
      </section></Link>

      <h1 className="f1-5">1-5 years</h1>
       <Link to="./products"><section className="features">
        <div className="feature-card">
          <img src="./1year.png"></img>
        </div>
        <div className="feature-card">
          <img src="./2year.png"></img>
        </div>
        <div className="feature-card">
          <img src="./3years.png"></img>
        </div>
        <div className="feature-card">
          <img src="./4years.png"></img>
        </div>
        <div className="feature-card">
          <img src="./5years.png"></img>
        </div>
      </section></Link>
    </div>
    </div>
  );
};

export default Home;
