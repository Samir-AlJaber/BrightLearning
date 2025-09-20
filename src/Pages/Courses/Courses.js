import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Courses.css";

const data = {
  "9to10": {
    Math: "Algebra, geometry, trigonometry basics.",
    Physics: "Motion, force, energy, simple machines.",
    Chemistry: "Atoms, molecules, chemical reactions.",
    Biology: "Cells, tissues, human physiology.",
    ICT: "Databases, programming basics, HTML/CSS."
  },
  "11to12": {
    Math: ["First Paper", "Second Paper"],
    Physics: ["First Paper", "Second Paper"],
    Chemistry: ["First Paper", "Second Paper"],
    Biology: ["First Paper", "Second Paper"],
    ICT: "Advanced spreadsheets, programming (C basics), web design."
  }
};

function Courses9to12() {
  const location = useLocation();
  const [selectedClass, setSelectedClass] = useState("9to10");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.state?.targetClass) {
      setSelectedClass(location.state.targetClass);
    }
  }, [location.state]);

  const classLabels = {
    "9to10": "Class 9 – 10",
    "11to12": "Class 11 – 12"
  };

  return (
    <div className="class-container">
      <Navbar />
      <h1>Course Descriptions (Class 9–12)</h1>
      <div className="dropdown-wrapper">
        <div className={`dropdown ${open ? "open" : ""}`}>
          <button className="dropdown-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open}>
            {classLabels[selectedClass]} ▼
          </button>
          <div className="dropdown-menu" role="menu">
            {Object.keys(classLabels).map(cls => (
              <button
                key={cls}
                className="menu-item"
                role="menuitem"
                onClick={() => {
                  setSelectedClass(cls);
                  setOpen(false);
                }}
              >
                {classLabels[cls]}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="subjects-grid">
        {Object.entries(data[selectedClass]).map(([subject, desc]) => (
          <div key={subject} className="card">
            <h3>{subject}</h3>
            {Array.isArray(desc) ? (
              <div className="papers-dropdown">
                {desc.map((paper, idx) => (
                  <button key={idx} className="paper-btn">
                    ➤ {paper}
                  </button>
                ))}
              </div>
            ) : (
              <p>{desc}</p>
            )}
          </div>
        ))}
      </section>
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

export default Courses9to12;