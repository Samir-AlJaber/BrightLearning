import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";
import { useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showConfirm, setShowConfirm] = useState(false);

  if (!user) {
    navigate("/", { replace: true });
    return null;
  }

  const handleLogout = () => {
    logout();
    setShowConfirm(false);
    navigate("/", { replace: true });
  };

  return (
    <div className="profile-wrap">
      <nav className="navbar">
        <div className="navbar-logo">Bright Learning</div>
        <div className="navbar-links">
          {location.pathname !== "/" && <button onClick={() => navigate("/")}>Home</button>}
          {location.pathname !== "/about" && <button onClick={() => navigate("/about")}>About</button>}
          {location.pathname !== "/courses" && <button onClick={() => navigate("/courses")}>Courses</button>}
          {location.pathname !== "/contact" && <button onClick={() => navigate("/contact")}>Contact</button>}
          {location.pathname !== "/profile" && <button onClick={() => navigate("/profile")}>Profile</button>}
          <button onClick={() => setShowConfirm(true)}>Logout</button>
        </div>
      </nav>

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
          <div className="profile-card">
            <h3>Learning Streak</h3>
            <p>🔥 5 days</p>
          </div>
          <div className="profile-card">
            <h3>Quote of the Day</h3>
            <p>“Learning never exhausts the mind.” – Leonardo da Vinci</p>
          </div>
          <div className="profile-card">
            <h3>Progress Overview</h3>
            <p>Coming soon: Track subjects and achievements here.</p>
          </div>
        </div>
      </main>

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
