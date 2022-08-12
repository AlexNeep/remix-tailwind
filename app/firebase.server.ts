// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCtBMYJ_qNNJluEbOzcM1YlRpW-6sFehBg",
  authDomain: "timely-fea6d.firebaseapp.com",
  databaseURL:
    "https://timely-fea6d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "timely-fea6d",
  storageBucket: "timely-fea6d.appspot.com",
  messagingSenderId: "111178285125",
  appId: "1:111178285125:web:03ca5780838434de26632c",
  measurementId: "G-LP9DH4R3EG",
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
// const analytics = getAnalytics(app);
