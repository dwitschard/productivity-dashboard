import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCURgNKHWYdDBwssDj8yIR588x-09qQX1E',
  authDomain: 'productivity-dashboard-42a69.firebaseapp.com',
  projectId: 'productivity-dashboard-42a69',
  storageBucket: 'productivity-dashboard-42a69.appspot.com',
  messagingSenderId: '820314397286',
  appId: '1:820314397286:web:24c044f8454e9172916ba7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
