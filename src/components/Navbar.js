import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
  };

  return (
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
    </nav>
  );
};

export default Navbar;
