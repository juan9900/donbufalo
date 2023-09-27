// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzEgbh76ud6OsmCbVnI9XNFGvxY03WU8s",
  authDomain: "donbufalo-a5acd.firebaseapp.com",
  projectId: "donbufalo-a5acd",
  storageBucket: "donbufalo-a5acd.appspot.com",
  messagingSenderId: "1046004470290",
  appId: "1:1046004470290:web:3f0f14f00755bea4777ecb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
