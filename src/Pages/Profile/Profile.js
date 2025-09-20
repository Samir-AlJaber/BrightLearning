import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
    navigate("/", { replace: true });
  };

  return (
    <div className="profile-wrap">
      <Navbar />
      <main className="profile-main">
        <h1>Welcome back, {user.fullName} 👋</h1>
        <p className="sub-text">Your personal dashboard</p>
        <div className="profile-grid">
          <div className="profile-card">
            <h3>Full Name</h3>
            <p>{user.fullName}</p>
          </div>
          <div className="profile-card">
            <h3>Email</h3>
            <p>{user.email}</p>
          </div>
          <div className="profile-card">
            <h3>Membership</h3>
            <p>Free Plan</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a onClick={() => navigate("/about")} style={{ cursor: "pointer" }}>About</a>
          <a onClick={() => navigate("/courses")} style={{ cursor: "pointer" }}>Courses</a>
          <a onClick={() => navigate("/contact")} style={{ cursor: "pointer" }}>Contact</a>
        </div>
        <p>© 2025 Bright Learning. All rights reserved.</p>
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
};

export default Profile;