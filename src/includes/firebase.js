import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
import "firebase/storage";

// Put you firebase settings here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('sogns');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  storage,
};