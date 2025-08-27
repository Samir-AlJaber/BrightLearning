import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <nav className="navbar">
        <div className="navbar-logo">Bright Learning</div>
        <div className="class-btn1">
          <button>About</button>
          <button onClick={() => navigate("/courses")}>Courses</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
          <button onClick={() => navigate("/login")}>Log In</button>
        </div>
      </nav>
      <section className="style">
        <h1>Bright Learning – Guidance for Students</h1>
        <p>
          Discover tailored lessons for your classes and empower your academic
          journey with expert resources.
        </p>
        <div className="class-btn">
          <button onClick={() => navigate("/signup")}>Class 6-8</button>
          <button onClick={() => navigate("/signup")}>Class 9-10</button>
          <button onClick={() => navigate("/signup")}>Class 11-12</button>
        </div>
      </section>
      <section className="topics">
        <h2>Courses & Topics</h2>
        <h3>Start your journey, strengthen your foundation</h3>
        <h4>
          Bright Learning provides complete guidance with video tutorials,
          downloadable notes, and one-to-one doubt solving.
        </h4>

        <div className="topic-select">
          <div className="select">
            <h4>Explore Topics</h4>
            <p>
              Browse your subjects and find structured notes and tutorials
              crafted for your class.
            </p>
          </div>
          <div className="select">
            <h4>Need Help?</h4>
            <p>
              Connect with admins through our integrated Q&amp;A system. Get
              timely answers and stay ahead.
            </p>
          </div>
          <div className="select">
            <h4>Student Reviews</h4>
            <p>
              Learn from others’ experiences, read ratings, and share your own
              journey with Bright Learning.
            </p>
          </div>
        </div>
      </section>
      <section className="final-btn">
        <h2>Ready to Expand Your Learning?</h2>
        <h4>
          Join Bright Learning today and unlock a world of knowledge. Stay
          motivated and never stop learning.
        </h4>
        <button className="start-btn" onClick={() => navigate("/signup")}>
          Start Now 🚀
        </button>
      </section>
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About</a>
          <a onClick={() => navigate("/courses")} style={{ cursor: "pointer" }}>
            Courses
          </a>
          <a onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>
            Contact
            </a>

        </div>
        <div className="socials">
          <span role="img" aria-label="website">🌐</span>
          <span role="img" aria-label="facebook">📘</span>
          <span role="img" aria-label="twitter">🐦</span>
        </div>
        <p>© 2025 Bright Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default HomePage;
