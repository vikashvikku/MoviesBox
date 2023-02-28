import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzTokBJAAT6vbnMb7l0_oo6WJ5EAz5IVw",
  authDomain: "moviesbox-4cc44.firebaseapp.com",
  projectId: "moviesbox-4cc44",
  storageBucket: "moviesbox-4cc44.appspot.com",
  messagingSenderId: "869391037559",
  appId: "1:869391037559:web:0b8c253b3fd1abc6f74272",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "Movies");
export const reviewsRef = collection(db, "review");
export const usersRef = collection(db, "users");
export default app;
