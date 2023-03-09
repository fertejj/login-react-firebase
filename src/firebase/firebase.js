import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBFyPaOQsvUc7CFI8cekRjchMUbsH2Gc",
  authDomain: "login-react-js-9adb2.firebaseapp.com",
  projectId: "login-react-js-9adb2",
  storageBucket: "login-react-js-9adb2.appspot.com",
  messagingSenderId: "361217571246",
  appId: "1:361217571246:web:ecd7a88887d946bae9703f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);