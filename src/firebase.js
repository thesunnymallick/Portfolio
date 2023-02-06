
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAJKNkxvjsFhIUBCsF5QgDHMpqFDjaqV3o",
  authDomain: "thesunnymallick-portfolio.firebaseapp.com",
  projectId: "thesunnymallick-portfolio",
  storageBucket: "thesunnymallick-portfolio.appspot.com",
  messagingSenderId: "13409908293",
  appId: "1:13409908293:web:a7dde0a3abb8670afe552c"
};

export const app = initializeApp(firebaseConfig);
export const db=getFirestore()