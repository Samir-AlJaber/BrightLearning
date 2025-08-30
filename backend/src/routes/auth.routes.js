import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

const router = Router();

function createToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
}

router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingName = await User.findOne({ fullName: fullName.trim() });
    if (existingName) {
      return res.status(409).json({ message: "Username already taken" });
    }

    const existingEmail = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingEmail) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      passwordHash
    });

    const token = createToken(user);
    return res.json({
      token,
      user: { id: user._id, fullName: user.fullName, email: user.email }
    });
  } catch (err) {
    if (err?.code === 11000) {
      const field = Object.keys(err.keyPattern || {})[0];
      const msg = field === "fullName" ? "Username already taken" : "Email already registered";
      return res.status(409).json({ message: msg });
    }
    return res.status(500).json({ message: "Signup failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(400).json({ message: "Invalid password" });

    const token = createToken(user);
    res.json({
      token,
      user: { id: user._id, fullName: user.fullName, email: user.email }
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

export default router;
