import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-hero">
        <h1>About Paradise Nursery</h1>
        <p className="about-tagline">Growing happiness, one plant at a time 🌿</p>
      </div>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Paradise Nursery was founded in 2010 with a simple mission: to bring the beauty
          and serenity of nature into every home. What started as a small local greenhouse
          has blossomed into a beloved online destination for plant enthusiasts across the country.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          We believe that everyone deserves to live surrounded by greenery. Our mission is to
          make it easy, affordable, and joyful to bring plants into your life — whether you're
          a seasoned botanist or a first-time plant parent.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Services</h2>
        <p>
          We offer a wide variety of houseplants including succulents, tropical foliage, and
          flowering plants. Each plant comes with care instructions and is carefully packaged
          to arrive healthy at your door. We also provide expert advice and customer support
          to help your plants thrive.
        </p>
      </div>

      <div className="about-values">
        <div className="value-card">
          <span>🌱</span>
          <h3>Sustainability</h3>
          <p>We source plants responsibly and use eco-friendly packaging.</p>
        </div>
        <div className="value-card">
          <span>💚</span>
          <h3>Quality</h3>
          <p>Every plant is hand-selected and carefully inspected before shipping.</p>
        </div>
        <div className="value-card">
          <span>🤝</span>
          <h3>Community</h3>
          <p>We support local growers and give back to environmental causes.</p>
        </div>
      </div>

      <div className="about-section">
        <h2>Contact Us</h2>
        <p>📧 hello@paradisenursery.com</p>
        <p>📞 (555) 123-4567</p>
        <p>📍 123 Green Lane, Garden City, CA 90210</p>
      </div>
    </div>
  );
}

export default AboutUs;
