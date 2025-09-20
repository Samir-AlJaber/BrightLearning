import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../../components/Navbar";
import "./HomePage.css";

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="main">
      <Navbar />
      <section className="style">
        <h1>Bright Learning – Guidance for Students</h1>
        <p>Discover tailored lessons for your classes and empower your academic journey with expert resources.</p>
        <div className="class-btn">
          <button onClick={() => navigate("/courses", { state: { targetClass: "9to10" } })}>Class 9–10</button>
          <button onClick={() => navigate("/courses", { state: { targetClass: "11to12" } })}>Class 11–12</button>
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
        <h2>{user ? "Continue Your Learning" : "Ready to Expand Your Learning?"}</h2>
        <h4>{user ? "Browse courses and keep improving your knowledge." : "Join Bright Learning today and unlock a world of knowledge."}</h4>
        <button
          className="start-btn"
          onClick={() =>
            user
              ? navigate("/courses", { state: { from: location.pathname } })
              : navigate("/signup", { state: { from: location.pathname } })
          }
        >
          {user ? "Browse Courses 📚" : "Start Now 🚀"}
        </button>
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
    </div>
  );
};

export default HomePage;