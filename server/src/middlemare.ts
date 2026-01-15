import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const userMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];
  const decode = jwt.verify(token as string, process.env.JWT_PASSWORD!);

  if (decode) {
    // @ts-ignore
    req.userId = decode.id;
    next();
  } else {
    res.status(403).json({
      message: "You are not Logged In",
    });
  }
};

// override the types of the express request object
