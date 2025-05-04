// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-tKTYrc5Pdle9NvQHyZ-QUk-JuY24wVM",
  authDomain: "hot-tours-d9663.firebaseapp.com",
  projectId: "hot-tours-d9663",
  storageBucket: "hot-tours-d9663.firebasestorage.app",
  messagingSenderId: "47885479098",
  appId: "1:47885479098:web:499d02bbdf84d325ba2683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);