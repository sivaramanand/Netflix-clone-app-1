import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBdQc0J0SLsYkykObxxyvZJJNpN4l7U3CA",
  authDomain: "netflix-project-39e34.firebaseapp.com",
  projectId: "netflix-project-39e34",
  storageBucket: "netflix-project-39e34.appspot.com",
  messagingSenderId: "828210341216",
  appId: "1:828210341216:web:4cd35e5ff3e7572ab72a05",
  measurementId: "G-J3VRZX052M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app)
