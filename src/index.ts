import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { connectDB, UserModle } from "./db.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const JWT_PASS = "!3kjduk34j";

app.post("/api/v1/signup", async (req, res) => {
  try {
    // TODO: zod validation

    const { username, password } = req.body;

    // If Already have username
    const user = await UserModle.findOne({ username });
    if (user) {
      return res.status(403).json({ error: "User Already In the Database" });
    }

    // ToDo: Hash Password

    await UserModle.create({
      username,
      password,
    });

    res.json({
      message: "User Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

app.post("/app/v1/signin", (req, res) => {});

app.get("/api/v1/content", (req, res) => {});
app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Starts On ${PORT}`);
  });
});
