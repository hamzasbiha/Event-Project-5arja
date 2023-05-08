// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8wmlQdUMJ15RznbiLq9bl317VwpJTrRM",
  authDomain: "arajni.firebaseapp.com",
  projectId: "arajni",
  storageBucket: "arajni.appspot.com",
  messagingSenderId: "977181989846",
  appId: "1:977181989846:web:14274b2cd0285e56422277",
  measurementId: "G-B9EG9TW901"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);