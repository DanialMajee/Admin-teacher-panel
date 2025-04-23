// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlaU9PoLb9BC_-QaIOlH5IOiDzwA4GkqM",
  authDomain: "fms1-4b3e7.firebaseapp.com",
  projectId: "fms1-4b3e7",
  storageBucket: "fms1-4b3e7.firebasestorage.app",
  messagingSenderId: "57125289464",
  appId: "1:57125289464:web:4f8fa3c23c0c8bb45e2a0d",
  measurementId: "G-FZFHT67XXR"
};

// Initialize Firebase
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const txtDB = getFirestore(app);
const imgDB = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { txtDB, imgDB, db, auth, app, getFirestore };