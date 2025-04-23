// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlaU9PoLb9BC_-QaIOlH5IOiDzwA4GkqM",
  authDomain: "fms1-4b3e7.firebaseapp.com",
  databaseURL: "https://fms1-4b3e7-default-rtdb.firebaseio.com",
  projectId: "fms1-4b3e7",
  storageBucket: "fms1-4b3e7.firebasestorage.app",
  messagingSenderId: "57125289464",
  appId: "1:57125289464:web:4f8fa3c23c0c8bb45e2a0d",
  measurementId: "G-FZFHT67XXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Export not required here unless used in another module

// Event listener for sign-up
const signup = document.getElementById('submitSignUp');
signup.addEventListener('click', async (event) => {
  event.preventDefault();

  // Get input values
  const email = document.getElementById('rEmail').value;
  const password = document.getElementById('rPassword').value;
  const firstName = document.getElementById('fName').value;
  const lastName = document.getElementById('lname').value;

  // Initialize Firebase Auth
  const auth = getAuth();

  try {
    // Create user
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Prepare user data
    const userData = {
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

    // Store user data in Firestore
    await setDoc(doc(db, "users", user.uid), userData);

    // Success message
    alert("User registered successfully!");
  } catch (error) {
    // Error handling
    console.error("Error during sign-up:", error);
    alert(`Error: ${error.message}`);
  }
});
