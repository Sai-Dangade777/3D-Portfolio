import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0ty8xuoTh4BDAxFf3WQr2MMhxoP2xRus",
  authDomain: "portfolio-4dd55.firebaseapp.com",
  projectId: "portfolio-4dd55",
  storageBucket: "portfolio-4dd55.firebasestorage.app",
  messagingSenderId: "406539529760",
  appId: "1:406539529760:web:811c79841051ad2a5f5645",
  measurementId: "G-T9M76ES15M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
