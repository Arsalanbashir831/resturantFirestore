// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQoQ47zhB6zNpZhh7l9Xjsy8K9rSM44xY",
  authDomain: "resturantfirestore-34143.firebaseapp.com",
  projectId: "resturantfirestore-34143",
  storageBucket: "resturantfirestore-34143.appspot.com",
  messagingSenderId: "125824785632",
  appId: "1:125824785632:web:f046ef6eb8c11b8ebfc485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)