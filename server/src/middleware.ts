import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unothorized" });

  try {
    const payload = jwt.verify(token as string, process.env.JWT_PASSWORD!);
    // @ts-ignore
    req.userId = payload.id;
    next();
  } catch (error) {
    res.status(403).json({
      message: "Invalid Token",
    });
  }
};

// override the types of the express request object
