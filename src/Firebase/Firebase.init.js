// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBkeTjpXIqqJpoMLmoy6rtYTYNins6Cyo",
  authDomain: "smart-deals-3347e.firebaseapp.com",
  projectId: "smart-deals-3347e",
  storageBucket: "smart-deals-3347e.firebasestorage.app",
  messagingSenderId: "723514708318",
  appId: "1:723514708318:web:c971f7603856a2e59a3fcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);