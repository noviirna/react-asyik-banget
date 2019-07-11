import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBw2cvAts1wEd9OC3nhFJsnsvNk1wuo-Ls",
  authDomain: "novi-irnawati-s-portofolio.firebaseapp.com",
  databaseURL: "https://novi-irnawati-s-portofolio.firebaseio.com",
  projectId: "novi-irnawati-s-portofolio",
  storageBucket: "",
  messagingSenderId: "404957284012",
  appId: "1:404957284012:web:0c9bcc52cf3440bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default { db, firebaseConfig };
export { db, firebaseConfig };
