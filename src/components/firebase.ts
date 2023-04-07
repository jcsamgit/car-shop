// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCukLzafWZJ--Z5OYPzyCh--fmuBm81ouk",
    authDomain: "car-shop-db47c.firebaseapp.com",
    projectId: "car-shop-db47c",
    storageBucket: "car-shop-db47c.appspot.com",
    messagingSenderId: "958810419707",
    appId: "1:958810419707:web:e9017dded82d3e2a2a9b5e",
    measurementId: "G-PYRPKZ039R"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);