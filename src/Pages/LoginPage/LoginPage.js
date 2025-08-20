import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Bright Learning</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          <div className="forgot-password">
            <a href="/#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Don’t have an account? <button onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;