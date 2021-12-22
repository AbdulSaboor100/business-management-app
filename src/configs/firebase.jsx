import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth   , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import {getFirestore, collection ,query , where, increment, deleteField, addDoc ,doc , updateDoc ,setDoc  , getDoc , getDocs ,deleteDoc ,onSnapshot , Timestamp} from "firebase/firestore";
import { getStorage, ref, uploadBytes ,getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC7aZgFvHpLOmMDIKflbkFrjY9WZKqtWfo",
  authDomain: "bmaa100.firebaseapp.com",
  projectId: "bmaa100",
  storageBucket: "bmaa100.appspot.com",
  messagingSenderId: "314459392327",
  appId: "1:314459392327:web:26a365095115d7c7322462",
  measurementId: "G-SBXDCEHV7S"
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
  deleteField,
  where,
  query
}