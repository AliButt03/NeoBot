// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqLJndX47NNSJE6cQUqEKv3outijCnplY",
  authDomain: "neobot-f0529.firebaseapp.com",
  projectId: "neobot-f0529",
  storageBucket: "neobot-f0529.firebasestorage.app",
  messagingSenderId: "959489692926",
  appId: "1:959489692926:web:6ba0c4e61ee5e9020181af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
