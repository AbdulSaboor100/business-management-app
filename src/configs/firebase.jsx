import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth   , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";
import {getFirestore, collection , increment, deleteField, addDoc ,doc , updateDoc ,setDoc  , getDoc , getDocs ,deleteDoc ,onSnapshot , Timestamp} from "firebase/firestore";
import { getStorage, ref, uploadBytes ,getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDUsblw1MGrp5rGM51wPzRNiHdlzMoNKpo",
  authDomain: "instagram1-clone1.firebaseapp.com",
  projectId: "instagram1-clone1",
  storageBucket: "instagram1-clone1.appspot.com",
  messagingSenderId: "1097488119347",
  appId: "1:1097488119347:web:74ec748ac1e22f3c56d546",
  measurementId: "G-4LE3ZZK5MR"
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