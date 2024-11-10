// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS_VeyLfa0IrtmwVry6Mk8F2OtCsNpcmM",
  authDomain: "bootcam-3-register.firebaseapp.com",
  projectId: "bootcam-3-register",
  storageBucket: "bootcam-3-register.appspot.com",
  messagingSenderId: "368501702055",
  appId: "1:368501702055:web:30564ea040c0296d864a82",
  measurementId: "G-2320JCJQ90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)