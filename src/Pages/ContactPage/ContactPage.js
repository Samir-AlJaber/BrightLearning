import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./ContactPage.css";
import samirPic from "../../Images/Samir.jpg";
import tanimPic from "../../Images/Tanim.jpg";
import fahimPic from "../../Images/Fahim.jpg";

const ContactPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
  };

  return (
    <div className="contact-page">
      <nav className="navbar">
        <div className="navbar-logo">Bright Learning</div>
        <div className="navbar-links">
          {location.pathname !== "/" && <button onClick={() => navigate("/")}>Home</button>}
          {location.pathname !== "/about" && <button onClick={() => navigate("/about")}>About</button>}
          {location.pathname !== "/courses" && <button onClick={() => navigate("/courses")}>Courses</button>}
          {location.pathname !== "/contact" && <button onClick={() => navigate("/contact")}>Contact</button>}
          {!user ? (
            <>
              <button onClick={() => navigate("/signup", { state: { from: location.pathname } })}>Sign Up</button>
              <button onClick={() => navigate("/login", { state: { from: location.pathname } })}>Log In</button>
            </>
          ) : (
            <>
              {location.pathname !== "/profile" && <button onClick={() => navigate("/profile")}>Profile</button>}
              <button onClick={() => setShowConfirm(true)}>Logout</button>
            </>
          )}
        </div>
      </nav>

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

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div className="confirm-actions">
              <button className="cancel-btn" onClick={() => setShowConfirm(false)}>Cancel</button>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
