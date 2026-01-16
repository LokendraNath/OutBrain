import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ message: "Token Missing" });
    }
    const decoded = jwt.verify(token as string, process.env.JWT_PASSWORD!);
    // @ts-ignore
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({
      message: "Invalid Token",
    });
  }
};

// override the types of the express request object
