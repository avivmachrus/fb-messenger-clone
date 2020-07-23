import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYyc40qjzyr7zmk8zrrdHlvc36p2c2cwE",
  authDomain: "fb-messenger-clone-9892f.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-9892f.firebaseio.com",
  projectId: "fb-messenger-clone-9892f",
  storageBucket: "fb-messenger-clone-9892f.appspot.com",
  messagingSenderId: "967758889877",
  appId: "1:967758889877:web:ceb3347e517700933e2c9c",
  measurementId: "G-V3QPRVCWRV",
});

const db = firebaseApp.firestore();

export default db;
