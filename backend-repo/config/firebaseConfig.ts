import * as admin from 'firebase-admin';

const serviceAccount = require('../ebuddy-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:"https://ebuddy-5745f.firebaseio.com"
});

export const db = admin.firestore();
export const auth = admin.auth();
