import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBxhuhvst-Vqpg1HST3EywAErIt58b2ckY",
  authDomain: "doan-blog.firebaseapp.com",
  projectId: "doan-blog",
  storageBucket: "doan-blog.appspot.com",
  messagingSenderId: "1081060066532",
  appId: "1:1081060066532:web:db0d68647e71ec9eb318f1"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 

export const auth = getAuth(app);