import React, { useState, useContext } from "react";
import "./LoginPage.css";
import { useNavigate, useLocation } from "react-router-dom";
import { api } from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const from = location.state?.from;

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const res = await api.post("/auth/login", { email, password });

      login(res.data.user, res.data.token);

      setSuccessMsg(`Welcome, ${res.data.user.fullName}!`);
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Login failed");
    }
  };

  const handleOk = () => {
    if (from && from !== "/login" && from !== "/signup") {
      navigate(from, { replace: true });
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
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
              <button className="ok-btn" onClick={handleOk}>OK</button>
            </div>
          </div>
        ) : (
          <>
            {errorMsg && <div className="notice error">{errorMsg}</div>}
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <button type="submit" className="login-button">Login</button>
            </form>
            <p className="signup-link">
              Don’t have an account?{" "}
              <button onClick={() => navigate("/signup", { state: { from: from || "/" } })}>Sign Up</button>
            </p>
            <button className="home-nav-btn" onClick={() => navigate("/")}>⬅ Back to Home</button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;