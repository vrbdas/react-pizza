import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWGlnehM6wt1PPFBVA05yJBwKmbuJeoKM",
  authDomain: "react-pizza-f1a05.firebaseapp.com",
  databaseURL: "https://react-pizza-f1a05-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-pizza-f1a05",
  storageBucket: "react-pizza-f1a05.firebasestorage.app",
  messagingSenderId: "98148375528",
  appId: "1:98148375528:web:f42ae52563ad4c6fa4625d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };