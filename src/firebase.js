import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNDVkcilis8_BuwaKnAeTfYa5Yc-QfjBI",
  authDomain: "fb-messenger-clone-b47d5.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-b47d5.firebaseio.com",
  projectId: "fb-messenger-clone-b47d5",
  storageBucket: "fb-messenger-clone-b47d5.appspot.com",
  messagingSenderId: "166400172509",
  appId: "1:166400172509:web:d10253c62987b6cf2d1634",
  measurementId: "G-G9BK1V7QZR",
});

const db = firebaseApp.firestore();

export { db };
