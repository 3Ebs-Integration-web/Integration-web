
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyA-uds7bbOwToWv7I_kRJ400d0b8twoxFk",
  authDomain: "react-firebase-auth-1c8f4.firebaseapp.com",
  projectId: "react-firebase-auth-1c8f4",
  storageBucket: "react-firebase-auth-1c8f4.appspot.com",
  messagingSenderId: "982850522289",
  appId: "1:982850522289:web:d7852e5715725137186690"
};


const app = firebase.initializeApp(firebaseConfig);
export default app;