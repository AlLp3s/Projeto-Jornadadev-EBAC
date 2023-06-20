import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBab8CBGc0tC-0idVyN1yr3fjsrxJ0KltA",
  authDomain: "jornadadev-9a337.firebaseapp.com",
  projectId: "jornadadev-9a337",
  storageBucket: "jornadadev-9a337.appspot.com",
  messagingSenderId: "765075212164",
  appId: "1:765075212164:web:08e467ac30434776b4ffd1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
