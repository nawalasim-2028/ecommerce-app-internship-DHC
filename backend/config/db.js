import express from "express";
import { connectDB } from "./config/db.js";  // <-- Correct import
import dotenv from "dotenv";
dotenv.config();
const app = express();
connectDB();
app.get("/", (req, res) => {
  res.send("Server is running");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});