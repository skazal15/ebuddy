
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, updateUser, fetchUser } from '../apis/userApi';

export const createUserAction = createAsyncThunk(
  'user/create',
  async ({ userId, data }: { userId: string; data: object }) => {
    const response = await createUser(userId, data);
    return response;
  }
);

export const updateUserAction = createAsyncThunk(
  'user/update',
  async ({ userId, data }: { userId: string; data: object }) => {
    const response = await updateUser(userId, data);
    return response;
  }
);

export const fetchUserAction = createAsyncThunk(
  'user/fetch',
  async (userId: string) => {
    const response = await fetchUser(userId);
    return response;
  }
);
