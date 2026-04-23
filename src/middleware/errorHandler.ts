import { Request, Response, NextFunction } from "express";

export interface ApiError extends Error {
  status?: number;
  details?: unknown;
}

export const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = err.status ?? 500;

  res.status(status).json({
    error: err.message || "Internal Server Error",
    details: err.details ?? null,
  });
};
