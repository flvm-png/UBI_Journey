import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhwdt2CNoWxxTpkC9JPXi7isK_c4YNwkA",
  authDomain: "ubijourneyauth.firebaseapp.com",
  projectId: "ubijourneyauth",
  storageBucket: "ubijourneyauth.appspot.com",
  messagingSenderId: "511777185837",
  appId: "1:511777185837:web:3d5f84aa6a6c7859d418a4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);