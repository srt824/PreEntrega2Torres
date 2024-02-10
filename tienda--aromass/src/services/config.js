
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "tienda-aromass.firebaseapp.com",
  projectId: "tienda-aromass",
  storageBucket: "tienda-aromass.appspot.com",
  messagingSenderId: "462506896262",
  appId: "1:462506896262:web:bb868707eb21a623c95a07"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);