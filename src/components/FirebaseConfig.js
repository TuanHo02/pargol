// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFfi0HCwp1YESgRsJL-wtkj0u0sg_FYLc",
  authDomain: "project1-a3003.firebaseapp.com",
  projectId: "project1-a3003",
  storageBucket: "project1-a3003.appspot.com",
  messagingSenderId: "776983091208",
  appId: "1:776983091208:web:47ec50d1cfc4216e5219bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };