// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPTz1bGMlSLsYg0ygj812BAxE72ShCQis",
  authDomain: "donbufalo-7e06c.firebaseapp.com",
  projectId: "donbufalo-7e06c",
  storageBucket: "donbufalo-7e06c.appspot.com",
  messagingSenderId: "1043426280138",
  appId: "1:1043426280138:web:3cb65504c4800f78f9ea33",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
