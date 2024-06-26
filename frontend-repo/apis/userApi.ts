
import axios from 'axios';
import { auth } from '../utils/firebaseConfig';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const createUser = async (userId: string, data: object) => {
  const response = await apiClient.post('/create-user-data', { userId, data });
  return response.data;
};

export const updateUser = async (userId: string, data: object) => {
  const response = await apiClient.post('/update-user-data', { userId, data });
  return response.data;
};

export const fetchUser = async (userId: string) => {
  const response = await apiClient.get(`/fetch-user-data?userId=${userId}`);
  return response.data;
};
