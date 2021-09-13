import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDnJVK7tokmApdXI1U0IQov0_GZux3eDNA",
    authDomain: "twitter-clone-f47a9.firebaseapp.com",
    projectId: "twitter-clone-f47a9",
    storageBucket: "twitter-clone-f47a9.appspot.com",
    messagingSenderId: "935490742685",
    appId: "1:935490742685:web:4ca8964221b1c39dfa6774",
    measurementId: "G-52D1SKDW2N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;  