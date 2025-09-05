import express from "express";
import { connectDB } from "./db.js";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import cartRoute from "./routes/cart.route.js";
import saveForLater from "./routes/saveForLater.routes.js";
import cookieParser from "cookie-parser";
import productRoute from "./routes/product.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
dotenv.config();
const app = express();
connectDB();
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
