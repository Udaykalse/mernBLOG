// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f0cf3.firebaseapp.com",
  projectId: "mern-blog-f0cf3",
  storageBucket: "mern-blog-f0cf3.appspot.com",
  messagingSenderId: "877350156282",
  appId: "1:877350156282:web:30a2bfa52dea1539259643"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);