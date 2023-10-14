import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCogrh5tsJIbMRWvdhnOUvmRj_02xqsr6Q",
  authDomain: "ai-story-auth.firebaseapp.com",
  projectId: "ai-story-auth",
  storageBucket: "ai-story-auth.appspot.com",
  messagingSenderId: "125590956018",
  appId: "1:125590956018:web:1ab7f0981b48decc21ad6b",
  measurementId: "G-GZFCWJKYPQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);