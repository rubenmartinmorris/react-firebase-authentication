import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUvRsU3PKJ-co9LBp1KatgK2KB2yP0JiE",
  authDomain: "school-16dcd.firebaseapp.com",
  projectId: "school-16dcd",
  storageBucket: "school-16dcd.appspot.com",
  messagingSenderId: "109206814306",
  appId: "1:109206814306:web:2a27a17c7c39bdb25a5b3b",
  measurementId: "G-SME5MMNQ7P",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
