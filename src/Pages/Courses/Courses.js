import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
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
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
  };

  return (
    <div className="class-container">
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

      <h1>Course Descriptions (Class 9–10)</h1>
      <div className="dropdown-wrapper">
        <div className={`dropdown ${open ? "open" : ""}`}>
          <button className="dropdown-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open}>
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

      <footer className="courses-footer">
        <div className="footer-content">
          <h4>Bright Learning</h4>
          <p>Smart courses for students with clear notes and guidance.</p>
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
}

export default Courses9to10;
