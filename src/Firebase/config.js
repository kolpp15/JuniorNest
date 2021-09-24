// Import the functions you need from the SDKs you need
import app from "firebase/app";
import 'firebase/firestore';
import 'firebase/storage';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7kGyXplLEyLVpcFB6gOHdVMgbTCsV3pM",
  authDomain: "junior-nest.firebaseapp.com",
  projectId: "junior-nest",
  storageBucket: "junior-nest.appspot.com",
  messagingSenderId: "40895880868",
  appId: "1:40895880868:web:3ab5218a1feb7484581031",
  measurementId: "G-6LP8E4NRJ7"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
//const analytics = getAnalytics(app);
const storage = firebase.storage();

export { storage, firebase, firestore, app };