import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => (
  <motion.div
    className="home-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    {/* Hero Section */}
    <div className="hero-section">
      <h1 className="hero-title">Donate Blood, Save Lives</h1>
      <p className="hero-subtitle">
        Join our community of donors and make a difference today.
      </p>
      <button className="hero-button">Find Donors</button>
    </div>
     

    {/* Stats Section */}
    <div className="stats-section">
      <div className="stat">
        <h3>10,000+</h3>
        <p>Donors Registered</p>
      </div>
      <div className="stat">
        <h3>5,000+</h3>
        <p>Lives Saved</p>
      </div>
      <div className="stat">
        <h3>2,000+</h3>
        <p>Requests Fulfilled</p>
      </div>
    </div>

    {/* Why Donate Section */}
    <div className="info-section">
      <h2 className="section-title">Why Donate Blood?</h2>
      <p className="info-text">
        Every blood donation can save up to three lives. Be a hero and make a
        difference.
      </p>
    </div>

    {/* Steps Section */}
    <div className="steps-section">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <span className="step-number">1</span>
          <p>Register as a donor or recipient.</p>
        </div>
        <div className="step">
          <span className="step-number">2</span>
          <p>Search for matching donors in your area.</p>
        </div>
        <div className="step">
          <span className="step-number">3</span>
          <p>Contact and arrange a donation.</p>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="testimonial-section">
      <h2 className="section-title">What People Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>
            "This platform helped me find a donor in just 30 minutes. Truly a
            lifesaver!"
          </p>
          <h4>- Aisha Khan</h4>
        </div>
        <div className="testimonial">
          <p>
            "Amazing experience! I was able to donate blood and help someone in
            need easily."
          </p>
          <h4>- Ahmed Ali</h4>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Home;
