import firebase from 'firebase/app';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYrXxFHyz1gIDcE9Jv8cC-CcfSyqXjzA",
  authDomain: "algos-project.firebaseapp.com",
  projectId: "algos-project",
  storageBucket: "algos-project.appspot.com",
  messagingSenderId: "818012534749",
  appId: "1:818012534749:web:e8192f5f3e83d4335be834"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };