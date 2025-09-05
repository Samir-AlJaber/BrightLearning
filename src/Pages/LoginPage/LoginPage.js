import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const res = await api.post("/auth/login", { email, password });
      setSuccessMsg(`Welcome, ${res.data.user.fullName}!`);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Bright Learning</h2>

        {successMsg ? (
          <div className="notice success">
            <div className="notice-text">{successMsg}</div>
            <div className="notice-actions">
              <button className="ok-btn" onClick={() => navigate("/")}>OK</button>
            </div>
          </div>
        ) : (
          <>
            {errorMsg && <div className="notice error">{errorMsg}</div>}

            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" required />

              <div className="forgot-password">
                <a href="/#">Forgot Password?</a>
              </div>

              <button type="submit" className="login-button">Login</button>
            </form>

            <p className="signup-link">
              Don’t have an account? <button onClick={() => navigate("/signup")}>Sign Up</button>
            </p>

            <button className="home-nav-btn" onClick={() => navigate("/")}>
              ⬅ Back to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default LoginPage;