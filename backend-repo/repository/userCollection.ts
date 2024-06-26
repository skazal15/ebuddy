import { db } from '../config/firebaseConfig';

export const createUser = async (userId: string, userData: object) => {
  await db.collection('USERS').doc(userId).set(userData);
};

export const updateUser = async (userId: string, userData: object) => {
  await db.collection('USERS').doc(userId).set(userData, { merge: true });
};

export const getUser = async (userId: string) => {
  return await db.collection('USERS').doc(userId).get();
};
