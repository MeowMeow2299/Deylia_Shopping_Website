// ContactPage.jsx
import React from 'react';
import './Contact.scss';
import useScrollReveal from "../hooks/useScrollReveal";
const Contact = () => {
   const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "show" : ""}`}
    >
    <div className="contact-container">
      <h2>Give me your feedback</h2>

      <form className="contact-form">
        <label>
          Your name account:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Messenger:
          <textarea name="message" rows="5" required />
        </label>

        <button type="submit">Next</button>
      </form>

      <div className="contact-info">
        <p><strong>📍 Địa chỉ:</strong> Sài Gòn, Việt Nam</p>
        <p><strong>📧 Email:</strong> hong@example.com</p>
        <p><strong>📞 SĐT:</strong> 0123 456 789</p>
      </div>
    </div>
    </div>
  );
};

export default Contact;