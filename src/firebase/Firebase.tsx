// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOCxWtzMh-Y2_bV5g2UeStmZuW5H5TkEU",
  authDomain: "seoud-building-clone.firebaseapp.com",
  projectId: "seoud-building-clone",
  storageBucket: "seoud-building-clone.appspot.com",
  messagingSenderId: "521863304942",
  appId: "1:521863304942:web:a218acc0cd4cd7680105ff"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()