import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./AboutPage.css";

const AboutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
  };

  return (
    <div className="about-wrap">
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

      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Bright Learning</h1>
          <p>Bright Learning is a smart learning platform for students of classes 6–12 — with short video lessons, downloadable notes, and quick doubt-solving support.</p>
          <div className="about-cta">
            <button onClick={() => navigate("/courses")}>Browse Courses</button>
            {!user && (
              <>
                <button onClick={() => navigate("/signup", { state: { from: location.pathname } })}>Create Free Account</button>
                <button onClick={() => navigate("/login", { state: { from: location.pathname } })}>Login</button>
              </>
            )}
            <button onClick={() => navigate("/contact")}>Contact Admin</button>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>How Learning Works</h2>
        <p className="about-sub">Structured steps — Video → Notes → Practice → Doubt Solving.</p>
        <div className="about-grid">
          <div className="value-card"><div className="icon" aria-hidden>🎯</div><h3>Focused Lessons</h3><p>Each topic in less than 12 minutes, explained with examples.</p></div>
          <div className="value-card"><div className="icon" aria-hidden>📒</div><h3>Printable Notes</h3><p>PDF notes with formulas, summaries, and practice quizzes.</p></div>
          <div className="value-card"><div className="icon" aria-hidden>💬</div><h3>Ask Any Doubt</h3><p>Subject experts usually reply within 6–12 hours.</p></div>
          <div className="value-card"><div className="icon" aria-hidden>📈</div><h3>Exam Aligned</h3><p>Coverage and revision plans aligned with CBSE/ICSE/State board syllabi.</p></div>
        </div>
      </section>

      <section className="about-story">
        <div className="story-card">
          <h2>Our Story</h2>
          <p>Many students, even with good resources, fail to master concepts due to lack of proper guidance. Bright Learning solves this — with classes, notes, and doubt support all in one place so that learning becomes structured and stress-free.</p>
        </div>
        <div className="stats-strip">
          <div className="stat"><span className="num">20k+</span><span className="lbl">Students</span></div>
          <div className="stat"><span className="num">4.8★</span><span className="lbl">Average Rating</span></div>
          <div className="stat"><span className="num">10+</span><span className="lbl">Subjects</span></div>
          <div className="stat"><span className="num">24/7</span><span className="lbl">Access</span></div>
        </div>
      </section>

      <section className="about-teachers">
        <h2>Meet the Teachers</h2>
        <p className="about-sub">Experienced faculty — clear concepts and exam-focused techniques.</p>
        <div className="teacher-grid">
          <div className="teacher-card"><h4>Tanim Mohammed Khan</h4><p>Mathematics • 8+ yrs experience</p></div>
          <div className="teacher-card"><h4>Samir Al Jaber</h4><p>Physics • 7+ yrs experience</p></div>
          <div className="teacher-card"><h4>Fahim Raiyan Ahmed</h4><p>Chemistry • 6+ yrs experience</p></div>
        </div>
      </section>

      <section className="about-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          <details><summary>Are these courses aligned with my board?</summary><p>Yes, our content is structured according to CBSE/ICSE/State board syllabi.</p></details>
          <details><summary>Can I download and print the notes?</summary><p>All notes are provided in PDF format — downloadable and printable.</p></details>
          <details><summary>How quickly will I get an answer to my doubts?</summary><p>Subject experts usually respond within 6–12 hours.</p></details>
        </div>
      </section>

      <section className="about-final">
        {!user ? (
          <>
            <h2>Ready to begin?</h2>
            <p>Create a free account today and start your classes.</p>
            <button className="start-btn" onClick={() => navigate("/signup", { state: { from: location.pathname } })}>Start Now 🚀</button>
          </>
        ) : (
          <>
            <h2>Welcome back!</h2>
            <p>Continue your journey with new courses and resources.</p>
            <button className="start-btn" onClick={() => navigate("/courses")}>Explore Courses 🚀</button>
          </>
        )}
      </section>

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

export default AboutPage;
