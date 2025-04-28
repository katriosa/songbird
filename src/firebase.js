import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKvtDcwB1tMZEAIPyllZaNi3P24Db9Yzs",
  authDomain: "songbird-ff3d2.firebaseapp.com",
  databaseURL: "https://songbird-ff3d2-default-rtdb.firebaseio.com",
  projectId: "songbird-ff3d2",
  storageBucket: "songbird-ff3d2.firebasestorage.app",
  messagingSenderId: "132275342263",
  appId: "1:132275342263:web:3103e21e246e4be89d7632",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function anonymousLogin() {
  return signInAnonymously(auth);
}
