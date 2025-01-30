// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration (replace with your actual Firebase credentials)
const firebaseConfig = {
  apiKey: "AIzaSyBvbHjlZ0Ak2gvdteSoW05vmQtWqQXWHg4",
  authDomain: "resturent-system.firebaseapp.com",
  projectId: "resturent-system",
  storageBucket: "resturent-system.firebasestorage.app",
  messagingSenderId: "683536219866",
  appId: "1:683536219866:web:1ae2ca34eb8e349ef06fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

export { auth };
