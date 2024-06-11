// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTk1m_YPiod7AwwVRIej1FK0qYsMymQjY",
  authDomain: "medium-app-10b31.firebaseapp.com",
  projectId: "medium-app-10b31",
  storageBucket: "medium-app-10b31.appspot.com",
  messagingSenderId: "40487371843",
  appId: "1:40487371843:web:13461b9a01d2be3c9a40f6",
  measurementId: "G-SH7YNPC6Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();