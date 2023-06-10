import {getFirestore,collection} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyArrpbkIT0wT8HSlIn1RZmrIdRlyYxF7F0",
  authDomain: "movies-and-more-3a205.firebaseapp.com",
  projectId: "movies-and-more-3a205",
  storageBucket: "movies-and-more-3a205.appspot.com",
  messagingSenderId: "387015889074",
  appId: "1:387015889074:web:6a70dba8a24a69dec079ab"
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const moviesRef=collection(db,'movies')
export const reviewsRef=collection(db,'reviews')
export const usersRef = collection(db, "users");

export default app