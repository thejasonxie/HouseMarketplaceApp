// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5jxlsjsIJa_42Lbws7xWh2GusUwGIekg",
  authDomain: "house-marketplace-app-4316d.firebaseapp.com",
  projectId: "house-marketplace-app-4316d",
  storageBucket: "house-marketplace-app-4316d.appspot.com",
  messagingSenderId: "576529295422",
  appId: "1:576529295422:web:150827e4327ec26c2a496f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore();  