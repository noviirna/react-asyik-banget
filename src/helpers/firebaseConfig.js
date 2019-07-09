import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsqGOkWWa0AUwW2msoNWZBeh-FH20JJt8",
  authDomain: "kanban-noviirna-h8.firebaseapp.com",
  databaseURL: "https://kanban-noviirna-h8.firebaseio.com",
  projectId: "kanban-noviirna-h8",
  storageBucket: "kanban-noviirna-h8.appspot.com",
  messagingSenderId: "914823035086",
  appId: "1:914823035086:web:340e36a91d0dc4e1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default { db, firebaseConfig };
export { db, firebaseConfig };
