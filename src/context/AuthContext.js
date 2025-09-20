import React, { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("bl_user");
    const savedToken = localStorage.getItem("bl_token");
    return savedUser && savedToken ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("bl_token");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }
      try {
        const res = await api.get("/profile");
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
        localStorage.removeItem("bl_user");
        localStorage.removeItem("bl_token");
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("bl_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("bl_user");
      localStorage.removeItem("bl_token");
    }
  }, [user]);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem("bl_user", JSON.stringify(userData));
    localStorage.setItem("bl_token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("bl_user");
    localStorage.removeItem("bl_token");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};