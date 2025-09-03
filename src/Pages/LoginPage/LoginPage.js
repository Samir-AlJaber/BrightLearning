import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const res = await api.post("/auth/login", { email, password });
      alert(`Welcome, ${res.data.user.fullName}!`);
      console.log("User:", res.data.user);

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Bright Learning</h2>
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
      </div>
    </div>
  );
};

export default LoginPage;