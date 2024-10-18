import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or need more information, feel free to reach
        out to us. We are always happy to help!
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
        />
        <textarea
          placeholder="Your Message"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
