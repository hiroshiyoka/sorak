// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getReactNativePersistance, initializeAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFKFGVRpvAteiRVQLKtGI5trn2_YJMSQM",
  authDomain: "sorak-firebase.firebaseapp.com",
  projectId: "sorak-firebase",
  storageBucket: "sorak-firebase.appspot.com",
  messagingSenderId: "210908846928",
  appId: "1:210908846928:web:d5c8df09a4976aecabea55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistance(AsyncStorage),
});

export const db = getFirestore(app);

export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
