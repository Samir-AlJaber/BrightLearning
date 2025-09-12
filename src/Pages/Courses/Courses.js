import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Courses.css";
const data = {
  9: {
    English: "Literature and advanced grammar, comprehension and essays.",
    Math: "Algebra, geometry, trigonometry basics.",
    Physics: "Motion, force, energy, simple machines.",
    Chemistry: "Atoms, molecules, chemical reactions.",
    Biology: "Cells, tissues, human physiology.",
    ICT: "Databases, programming basics, HTML/CSS."
  },
  10: {
    English: "Advanced literature, essays, comprehension practice.",
    Math: "Trigonometry, statistics, quadratic equations.",
    Physics: "Light, sound, electricity, magnetism.",
    Chemistry: "Periodic table, bonding, acids and bases.",
    Biology: "Genetics, evolution, reproduction, environment.",
    ICT: "Advanced spreadsheets, programming (C basics), web design."
  }
};

function Courses9to10() {
  const [selectedClass, setSelectedClass] = useState(9);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();  

  return (
    <div className="class-container">
      <h1>Course Descriptions (Class 9–10)</h1>
      <div className="dropdown-wrapper">
        <div className={`dropdown ${open ? "open" : ""}`}>
          <button
            className="dropdown-toggle"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
          >
            Select Class {selectedClass} ▼
          </button>
          <div className="dropdown-menu" role="menu" aria-label="Choose class">
            {[9, 10].map(cls => (
              <button
                key={cls}
                className="menu-item"
                role="menuitem"
                onClick={() => {
                  setSelectedClass(cls);
                  setOpen(false);
                }}
              >
                Class {cls}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section id="activeClass" className="active-class">
        <h2>Class {selectedClass}</h2>
        <p>Course descriptions for core subjects:</p>
      </section>
      
      <section className="subjects-grid">
        {Object.entries(data[selectedClass]).map(([subject, desc]) => (
          <div key={subject} className="card">
            <h3>{subject}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </section>

      <div className="home-btn-container">
        <button
          className="home-nav-btn"
          onClick={() => navigate("/")}
        >
          ⬅ Back to Home
        </button>
      </div>

      <footer className="courses-footer">
        <div className="footer-content">
          <h4>Bright Learning</h4>
          <p>Smart courses for students with clear notes and guidance.</p>
          <p>© 2025 Bright Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Courses9to10;
