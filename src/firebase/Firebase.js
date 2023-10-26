import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCogrh5tsJIbMRWvdhnOUvmRj_02xqsr6Q",
  authDomain: "ai-story-auth.firebaseapp.com",
  projectId: "ai-story-auth",
  storageBucket: "ai-story-auth.appspot.com",
  messagingSenderId: "125590956018",
  appId: "1:125590956018:web:d49afcec34168d2121ad6b",
  measurementId: "G-P04XXGCW74",
  databaseURL: "https://ai-story-auth-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const firebaseDB = getDatabase(app);
// const analytics = getAnalytics(app);
const authFireBase = getAuth(app);

export { app, authFireBase, firebaseDB };
