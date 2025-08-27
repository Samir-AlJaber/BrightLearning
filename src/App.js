import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignUpPage from "./Pages/signup/signup";
import Courses from "./Pages/Courses/Courses"; 
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;