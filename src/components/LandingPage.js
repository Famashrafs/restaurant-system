import React from "react";
import "../components/css/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to [Restaurant Name]</h1>
        <p>Your favorite meals delivered to your door</p>
        <button className="order-now-btn">Order Now</button>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Delicious Menu</h2>
          <p>Explore our variety of dishes made with love.</p>
        </div>
        <div className="feature">
          <h2>Fast Delivery</h2>
          <p>Get your food delivered hot and fresh in no time.</p>
        </div>
        <div className="feature">
          <h2>Easy Payment</h2>
          <p>Pay using Apple Pay, PayPal, or credit card.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
