import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTH_DOM,
  databaseURL: import.meta.env.VITE_DBURL,
  projectId: import.meta.env.VITE_PRO_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCK,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASURE_ID,
};

const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
// export const db = getFirestore(app);
export const auth = getAuth(app);
