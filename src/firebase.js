// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYrXxFHyz1gIDcC-CcfSyqXjzA",
  authDomain: "algos-project.firebaseapp.com",
  projectId: "algos-project",
  storageBucket: "algos-project.appspot.com",
  messagingSenderId: "818012534749",
  appId: "1:818012534749:web:e8192f5f3e83d4335be834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = getFirestore(app);

export { db };
