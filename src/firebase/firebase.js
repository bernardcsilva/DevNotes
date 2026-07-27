// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJy7jJk83Jy8UH-I3jtT05UaBaGgjLq5E",
  authDomain: "devnotes-7a46a.firebaseapp.com",
  projectId: "devnotes-7a46a",
  storageBucket: "devnotes-7a46a.firebasestorage.app",
  messagingSenderId: "308551930925",
  appId: "1:308551930925:web:9e1fa4d12db3d68aaf14a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { auth }
export { app, db }