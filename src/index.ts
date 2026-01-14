import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModle } from "./db.js";

const app = express();

app.post("/api/v1/signup", async (req, res) => {
  try {
    // TODO: zod validation

    const { username, password } = req.body;

    // If Already have username
    const user = await UserModle.find({ username });
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
