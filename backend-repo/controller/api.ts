import { Request, Response, NextFunction } from 'express';
import { db } from '../config/firebaseConfig';
import ApiError from '../entities/ApiError';
import { createUser, updateUser, getUser } from '../repository/userCollection';

export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, userData } = req.body;
    await updateUser(userId, userData);
    res.status(200).json({ message: 'User data updated successfully' });
  } catch (error) {
    next(new ApiError(500, (error as any).message));
  }
};

export const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.query;
    const userDoc = await getUser(userId as string);
    if (!userDoc.exists) {
      throw new ApiError(404, 'User not found');
    } else {
      res.status(200).json(userDoc.data());
    }
  } catch (error) {
    next(new ApiError(500, (error as any).message));
  }
};
