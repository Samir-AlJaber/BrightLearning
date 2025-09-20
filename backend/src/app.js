import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith("http://localhost")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.use("/api/auth", authRoutes);

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({
    message: `Welcome ${req.user.email}`,
    user: req.user
  });
});

export default app;
