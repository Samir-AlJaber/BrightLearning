import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Courses.css";
const data = {
  6: {
    English: "Reading comprehension; basic grammar; paragraph writing.",
    Math: "Whole numbers, fractions, basic geometry.",
    Science: "Matter, energy, plants & animals.",
    ICT: "Computer basics, typing, intro to Scratch."
  },
  7: {
    English: "Intermediate grammar, letter writing, comprehension.",
    Math: "Integers, algebra, geometry, percentages.",
    Science: "Heat, motion, ecosystems, human nutrition.",
    ICT: "Word processing, internet research, spreadsheets."
  },
  8: {
    English: "Advanced grammar, summaries, report writing.",
    Math: "Exponents, linear equations, mensuration.",
    Science: "Chemistry basics, electricity, heredity, environment.",
    ICT: "Spreadsheets, presentations, intro to HTML/CSS."
  }
};

function Courses() {
  const [selectedClass, setSelectedClass] = useState(6);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();  
  return (
    <div className="class-container">
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <button
        className="home-nav-btn"
        onClick={() => navigate("/")}
        >
           ⬅ Back to Home
           </button>
      </div>
      <h1>Course Descriptions (Class 6–8)</h1>
      <div className={`dropdown ${open ? "open" : ""}`}>
        <button
          className="dropdown-toggle"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
        >
          Select Class {selectedClass} ▼
        </button>
        <div className="dropdown-menu" role="menu" aria-label="Choose class">
          {[6, 7, 8].map(cls => (
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
    </div>
  );
}

export default Courses;
