import React from "react";
import {useNavigate} from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-wrap">
      
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Bright Learning</h1>
          <p>
            Bright Learning is a smart learning platform for students of classes
            6–12 — with short video lessons, downloadable notes, and quick
            doubt-solving support.
          </p>
          <div className="about-cta">
            <button onClick={() => navigate("/courses")}>Browse Courses</button>
            <button onClick={() => navigate("/signup")} className="ghost">
              Create Free Account
            </button>
          </div>
        </div>
      </section>

      
      <section className="about-values">
        <h2>How Learning Works</h2>
        <p className="about-sub">
          Structured steps — Video → Notes → Practice → Doubt Solving.
        </p>

        <div className="about-grid">
          <div className="value-card">
            <div className="icon" aria-hidden>🎯</div>
            <h3>Focused Lessons</h3>
            <p>Each topic in less than 12 minutes, explained with examples.</p>
          </div>

          <div className="value-card">
            <div className="icon" aria-hidden>📒</div>
            <h3>Printable Notes</h3>
            <p>PDF notes with formulas, summaries, and practice quizzes.</p>
          </div>

          <div className="value-card">
            <div className="icon" aria-hidden>💬</div>
            <h3>Ask Any Doubt</h3>
            <p>Subject experts usually reply within 6–12 hours.</p>
          </div>

          <div className="value-card">
            <div className="icon" aria-hidden>📈</div>
            <h3>Exam Aligned</h3>
            <p>
              Coverage and revision plans aligned with CBSE/ICSE/State board
              syllabi.
            </p>
          </div>
        </div>
      </section>
     </div> 
   );
  }; 

 export default AboutPage;     