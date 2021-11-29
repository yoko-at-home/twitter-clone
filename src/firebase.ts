import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_DATABASE,
  storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const provider =  new firebase.auth.GoogleAuthProvider()
