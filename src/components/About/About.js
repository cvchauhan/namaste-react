import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our restaurant! We are passionate about delivering delicious
        meals made with fresh ingredients and a touch of love. Our mission is to
        bring you an unforgettable dining experience that will keep you coming
        back for more.
      </p>
      <p>
        Established in 2014, we have been committed to providing high-quality
        service and a warm, welcoming atmosphere for all of our guests.
      </p>
      <div className="about-image">
        <img
          src="https://source.unsplash.com/800x400/?restaurant"
          alt="Restaurant"
        />
      </div>
    </div>
  );
}

export default About;
