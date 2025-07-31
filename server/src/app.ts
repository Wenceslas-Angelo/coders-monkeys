import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnection";
import authRoutes from "./routers/user.route";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/auth", authRoutes);

export default app;
