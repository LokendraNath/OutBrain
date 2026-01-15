import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { connectDB, ContentModle, UserModle } from "./db.js";

import dotenv from "dotenv";
import { userMiddleware } from "./middlemare.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const JWT_PASSWORD = process.env.JWT_PASSWORD!;

app.post("/api/v1/signup", async (req, res) => {
  try {
    // TODO: zod validation

    const { username, password } = req.body;

    // If Already have username
    const user = await UserModle.findOne({ username });
    if (user) {
      return res.status(403).json({ error: "User Already In the Database" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModle.create({
      username,
      password: hashedPassword,
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

app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Email And Password are required",
    });
  }

  // Check User Already Exist?
  const existingUser = await UserModle.findOne({ username });
  if (!existingUser) {
    return res.status(411).json({
      message: "User Is Not Availble",
    });
  }

  if (!existingUser.password) {
    return res.status(400).json({
      message: "Password Missing",
    });
  }

  // Hash Password Check
  const comparePassword = async (
    plainPassword: string,
    hashedPassword: string
  ) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
  };

  const isMatch = await comparePassword(password, existingUser.password);
  if (!isMatch) {
    return res.status(411).json({
      message: "Incorrect Password",
    });
  }

  // Token Create
  const token = jwt.sign({ id: existingUser._id }, JWT_PASSWORD, {
    expiresIn: "7d",
  });

  res.json({
    token,
  });
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
  const { title, url, userId } = req.body;

  try {
    await ContentModle.create({
      title,
      url,
      userId,
    });

    res.json({ message: "Content Created Successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/api/v1/content", userMiddleware, async (req, res) => {
  const userId = req.body;
  try {
    const content = await ContentModle.find({ userId });
    res.json({
      content,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Starts On ${PORT}`);
  });
});
