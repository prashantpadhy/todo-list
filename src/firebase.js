import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

apiKey: "AIzaSyCyLmVXIxoHsjl33uE-aKVyhXTbgXMuUlo",
  authDomain: "todo-list-62dec.firebaseapp.com",
  databaseURL: "https://todo-list-62dec-default-rtdb.firebaseio.com",
  projectId: "todo-list-62dec",
  storageBucket: "todo-list-62dec.appspot.com",
  messagingSenderId: "581668231879",
  appId: "1:581668231879:web:7788983876163b44563ce2",
  measurementId: "G-TD4ZLWKGV5"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
