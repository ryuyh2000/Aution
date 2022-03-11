// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrn1_Sg79LjAFCNB2fUm5iZgMCj_ecRCc",
  authDomain: "aution-d49a0.firebaseapp.com",
  projectId: "aution-d49a0",
  storageBucket: "aution-d49a0.appspot.com",
  messagingSenderId: "320284093461",
  appId: "1:320284093461:web:d8442e9a71d34b9705721c",
  measurementId: "G-3V5NZRGMWC",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const liveDB = getDatabase();
export const dbService = getFirestore();
export const authService = getAuth();
export const storageService = getStorage();
