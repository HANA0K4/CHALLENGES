// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE4vtMx1L7BA4cyadY-7aH3AtWZRbjYQI",
  authDomain: "first-project-e1279.firebaseapp.com",
  projectId: "first-project-e1279",
  storageBucket: "first-project-e1279.appspot.com",
  messagingSenderId: "537454161053",
  appId: "1:537454161053:web:471ae46f9a8faad7ccf874",
  measurementId: "G-SFR710YZC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {auth,app};