import React from 'react';
import './Success.scss';

const Success = () => {
  return (
    <div className="success-page">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for trusting Deylia. Your pastel parcel is on the way 💖</p>
      <a href="/" className="back-home">← Back to Home</a>
    </div>
  );
};

export default Success;