// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCykPhRsq_R8PiBgbASNpFTF5kVtJTUoAY",
  authDomain: "project2-54ff2.firebaseapp.com",
  projectId: "project2-54ff2",
  storageBucket: "project2-54ff2.firebasestorage.app",
  messagingSenderId: "550066472509",
  appId: "1:550066472509:web:dcde2f325078011ad48c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };