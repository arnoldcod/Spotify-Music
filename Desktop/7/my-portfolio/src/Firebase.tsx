import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3NIt-CTwhmjQB_SSost-9rer2XE_4LKE",
  authDomain: "arnoldcod7-da7c9.firebaseapp.com",
  projectId: "arnoldcod7-da7c9",
  storageBucket: "arnoldcod7-da7c9.appspot.com",
  messagingSenderId: "805939468726",
  appId: "1:805939468726:web:a12e49277d8eff3dee8917",
  measurementId: "G-09FTHL76TK"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
