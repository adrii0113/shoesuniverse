
import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// import Firebase from 'firebase';
import firebase from 'firebase/compat/app';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "moviefinder-90378.appspot.com",

  messagingSenderId: "1072305821107",

  appId: "1:1072305821107:web:ecbfb16c8177ac7de027c6",

  measurementId: "G-XNCD3482JM"

}


if (!getApps().length) {
  firebase.initializeApp(FirebaseCredentials)
} else {
  console.log("Alredy initialized")
}

const app = initializeApp(FirebaseCredentials)


const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}

