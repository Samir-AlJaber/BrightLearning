import React from "react";
import "./ContactPage.css";
import { useNavigate } from "react-router-dom";
import samirPic from "../../Images/Samir.jpg";
import tanimPic from "../../Images/Tanim.jpg";
import fahimPic from "../../Images/Fahim.jpg";


const ContactPage = () => {

  const navigate = useNavigate();

  return (
    <div className="contact-page">

      <header className="contact-header">
        <h1>Meet Our Team</h1>
        <p>We are here to guide and support you in your learning journey.</p>
      </header>

      <section className="team-section">
        <div className="team-card">
          <img src={samirPic} alt="Samir" />
          <h3>Samir</h3>
          <p>Project Leader</p>
          <p>Email: samir@example.com</p>
          <p>Phone: +880 123456789</p>
        </div>

        <div className="team-card">
          <img src={tanimPic} alt="Tanim" />
          <h3>Tanim</h3>
          <p>Senior Developer - 1</p>
          <p>Email: tanim@example.com</p>
          <p>Phone: +880 987654321</p>
        </div>

        <div className="team-card">
          <img src={fahimPic} alt="Fahim" />
          <h3>Fahim</h3>
          <p>Senior Developer - 2</p>
          <p>Email: fahim@example.com</p>
          <p>Phone: +880 555666777</p>
        </div>
      </section>

      <div>
        <button
          className="home-nav-btn"
          onClick={() => navigate("/")}
        >
          ⬅ Back to Home
        </button>
      </div>

      <footer className="contact-footer">
        <div className="footer-content">
          <h4>Bright Learning</h4>
          <p>Empowering students with guidance and resources to succeed.</p>
          <p>© 2025 Bright Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
