// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-9zU-IbljxK_FTfYx9ZyiFvZImm_6rrA",
  authDomain: "clone-b6cda.firebaseapp.com",
  projectId: "clone-b6cda",
  storageBucket: "clone-b6cda.appspot.com",
  messagingSenderId: "722714460791",
  appId: "1:722714460791:web:9c637037d67d519741bc72",
  measurementId: "G-9YVBFEXW9D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const analytics = getAnalytics(app);

export { auth }; // Export auth for use in other parts of your app
