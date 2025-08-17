import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="main">
      <nav className="navbar">
        <div className="navbar-logo">Bright Learning</div>
        <div className="navbar-links">
          <button>About</button>
          <button>Courses</button>
          <button>Contact</button>
          <button className="signup">Sign Up</button>
          <button className="login">Log In</button>
        </div>
      </nav>

      <section className="style">
        <h1>Bright Learning – Guidance for Students</h1>
        <p>
          Discover tailored lessons for your classes and empower your academic journey with expert resources.
        </p>
        <div className="class-btn">
          <button className="class68-btn">Class 6-8</button>
          <button className="class910-btn">Class 9-10</button>
          <button className="class1112-btn">Class 11-12</button>
        </div>
      </section>

      <section className="topics">
        <h2>Courses & Topics</h2>
        <h3>Start your journey, strengthen your foundation</h3>
        <p>
          Bright Learning provides complete guidance with video tutorials, downloadable notes, 
          and one-to-one doubt solving.
        </p>
        <div className="topic-select">
          <div className="select">
            <h4>Explore Topics</h4>
            <p>
              Browse your subjects and find structured notes and tutorials crafted for your class.
            </p>
          </div>
          <div className="select highlight">
            <h4>Need Help?</h4>
            <p>
              Connect with admins through our integrated Q&A system. Get timely answers and stay ahead.
            </p>
          </div>
          <div className="select">
            <h4>Student Reviews</h4>
            <p>
              Learn from others’ experiences, read ratings, and share your own journey with Bright Learning.
            </p>
          </div>
        </div>
      </section>

      <section className="final-btn">
        <h2>Ready to Expand Your Learning?</h2>
        <p>
          Join Bright Learning today and unlock a world of knowledge. Stay motivated and never stop learning.
        </p>
        <button className="start-btn">Start Now 🚀</button>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="socials">
          <span>🌐</span>
          <span>📘</span>
          <span>🐦</span>
        </div>
        <p>© 2025 Bright Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
