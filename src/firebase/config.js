import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "react-eshop-dfa58.firebaseapp.com",
  projectId: "react-eshop-dfa58",
  storageBucket: "react-eshop-dfa58.appspot.com",
  messagingSenderId: "706842885646",
  appId: "1:706842885646:web:6bc3f08923dc9acb1dc65f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
