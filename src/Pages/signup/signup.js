import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await api.post("/auth/signup", formData);
      setSuccessMsg("Signup successful! Your account has been created.");
      setFormData({ fullName: "", email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create an Account</h2>
        <h6>Join Bright Learning and start your journey today.</h6>

        {successMsg ? (
          <div className="notice success">
            <div className="notice-text">{successMsg}</div>
            <div className="notice-actions">
              <button className="ok-btn" onClick={() => navigate("/login")}>OK</button>
            </div>
          </div>
        ) : (
          <>
            {errorMsg && <div className="notice error">{errorMsg}</div>}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="submit" className="signup-btn">Sign Up</button>
            </form>

            <p className="login-link">
              Already have an account? <button onClick={() => navigate("/login")}>Log In</button>
            </p>
          </>
        )}

        <button className="home-nav-btn" onClick={() => navigate("/")}>
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;