// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-rentio.firebaseapp.com",
  projectId: "mern-rentio",
  storageBucket: "mern-rentio.appspot.com",
  messagingSenderId: "70505154340",
  appId: "1:70505154340:web:383aae377f79567cb855b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);