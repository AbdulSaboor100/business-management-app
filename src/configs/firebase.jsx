import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth   , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import {getFirestore, collection , increment, deleteField, addDoc ,doc , updateDoc ,setDoc  , getDoc , getDocs ,deleteDoc ,onSnapshot , Timestamp} from "firebase/firestore";
import { getStorage, ref, uploadBytes ,getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBlb7_ArxvyHR2od7TSkizpsln7VYXhqic",
  authDomain: "learning-cool.firebaseapp.com",
  projectId: "learning-cool",
  storageBucket: "learning-cool.appspot.com",
  messagingSenderId: "1085554141933",
  appId: "1:1085554141933:web:fb2b6808724a522b2cfae4",
  measurementId: "G-NR68Y9M2FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  db,
  doc,
  setDoc,
  getDoc,
  getDocs,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteDoc,
  Timestamp,
  onSnapshot,
  updateDoc,
  increment,
  deleteField
}