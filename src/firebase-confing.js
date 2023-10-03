import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCV11bugA-y6eREGav8LOaRdxoCV7YUCqM",
  authDomain: "test-ai-story.firebaseapp.com",
  projectId: "test-ai-story",
  storageBucket: "test-ai-story.appspot.com",
  messagingSenderId: "685004932878",
  appId: "1:685004932878:web:2629ef3ca444081d5d795f",
  measurementId: "G-QN9VJ2ES6H",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);