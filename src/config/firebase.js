// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqGdcQ5J5FMYkhEA_4uK06cqjMbBRjuIs",
  authDomain: "info-henrique.firebaseapp.com",
  projectId: "info-henrique",
  storageBucket: "info-henrique.appspot.com",
  messagingSenderId: "665661783544",
  appId: "1:665661783544:web:9e27461a4f8a0c9c9c2a0d",
  measurementId: "G-ET80J09H8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)