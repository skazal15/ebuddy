import { Request, Response, NextFunction } from 'express';
import ApiError from '../entities/ApiError';
import { auth } from '../config/firebaseConfig';

interface AuthenticatedRequest extends Request {
  user?: any;
}

export const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    throw new ApiError(401, 'Unauthorized');
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    next(new ApiError(401, 'Unauthorized'));
  }
};
