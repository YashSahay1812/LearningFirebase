// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7bEax74vsCGuRGUP_5oKLBL09IsgGZPY",
  authDomain: "myfirstproject-9d5c0.firebaseapp.com",
  projectId: "myfirstproject-9d5c0",
  storageBucket: "myfirstproject-9d5c0.appspot.com",
  messagingSenderId: "570702607863",
  appId: "1:570702607863:web:6715a8d40ce7df2ad0aaf2",
  measurementId: "G-MPBBH4S7BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);