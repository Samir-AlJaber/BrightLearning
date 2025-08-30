import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "brightlearning",
    });
    console.log("✅ MongoDB connected!");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}
