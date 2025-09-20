import React from "react";
import Navbar from "../../components/Navbar";
import "./ContactPage.css";
import samirPic from "../../Images/Samir.jpg";
import tanimPic from "../../Images/Tanim.jpg";
import fahimPic from "../../Images/Fahim.jpg";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <header className="contact-header">
        <h1>Meet Our Team</h1>
        <h4>We are here to guide and support you in your learning journey.</h4>
      </header>
      <section className="team-section">
        <div className="team-card">
          <img src={samirPic} alt="Samir" />
          <h3>Samir Al Zaber</h3>
          <h4>Project Leader</h4>
          <h4>Email: samir.cse.20230104136@aust.edu</h4>
          <h4>Phone: +880 1927266998</h4>
        </div>
        <div className="team-card">
          <img src={tanimPic} alt="Tanim" />
          <h3>Tanim Mohammed Khan</h3>
          <h4>Senior Developer - 1</h4>
          <h4>Email: tanim.cse.20230104137@aust.edu</h4>
          <h4>Phone: +880 1521745378</h4>
        </div>
        <div className="team-card">
          <img src={fahimPic} alt="Fahim" />
          <h3>Fahim Raiyan Ahmed</h3>
          <h4>Senior Developer - 2</h4>
          <h4>Email: fahim.cse.20220204098@aust.edu</h4>
          <h4>Phone: +880 1851500036</h4>
        </div>
      </section>
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
