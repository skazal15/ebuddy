import { Request, Response, NextFunction } from 'express';
import ApiError from '../entities/ApiError';

export const handleError = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const { statusCode, message } = err;
  res.status(statusCode || 500).json({ message });
};
