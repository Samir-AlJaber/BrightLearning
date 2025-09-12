import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
  };

  return (
    <div className="main">
      <nav className="navbar">
        <div className="navbar-logo">Bright Learning</div>
        <div className="class-btn1">
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

      <section className="style">
        <h1>Bright Learning – Guidance for Students</h1>
        <p>Discover tailored lessons for your classes and empower your academic journey with expert resources.</p>
        <div className="class-btn">
          <button onClick={() => navigate("/signup", { state: { from: location.pathname } })}>Class 6-8</button>
          <button onClick={() => navigate("/signup", { state: { from: location.pathname } })}>Class 9-10</button>
          <button onClick={() => navigate("/signup", { state: { from: location.pathname } })}>Class 11-12</button>
        </div>
      </section>

      <section className="topics">
        <h2>Courses & Topics</h2>
        <h3>Start your journey, strengthen your foundation</h3>
        <h4>Bright Learning provides complete guidance with video tutorials, downloadable notes, and one-to-one doubt solving.</h4>
        <div className="topic-select">
          <div className="select">
            <h4>Explore Topics</h4>
            <p>Browse subjects and find structured notes and tutorials.</p>
          </div>
          <div className="select">
            <h4>Need Help?</h4>
            <p>Connect with admins through Q&amp;A. Get timely answers.</p>
          </div>
          <div className="select">
            <h4>Student Reviews</h4>
            <p>Learn from others’ experiences and share your own.</p>
          </div>
        </div>
      </section>

      <section className="final-btn">
        <h2>Ready to Expand Your Learning?</h2>
        <h4>Join Bright Learning today and unlock a world of knowledge.</h4>
        <button className="start-btn" onClick={() => navigate("/signup", { state: { from: location.pathname } })}>Start Now 🚀</button>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a onClick={() => navigate("/about")} style={{ cursor: "pointer" }}>About</a>
          <a onClick={() => navigate("/courses")} style={{ cursor: "pointer" }}>Courses</a>
          <a onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>Contact</a>
        </div>
        <div className="socials">
          <span role="img" aria-label="website">🌐</span>
          <span role="img" aria-label="facebook">📘</span>
          <span role="img" aria-label="twitter">🐦</span>
        </div>
        <p>© 2025 Bright Learning. All rights reserved.</p>
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

export default HomePage;
