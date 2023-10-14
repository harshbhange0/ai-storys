import React, { useEffect, useState } from "react";
import { Route, Routes, redirect } from "react-router-dom";
import FeedHome from "./components/pages/feed/FeedHome";
import UserProfile from "./components/pages/profile/UserProfile";
import StoryMakerHome from "./components/pages/story-maker/StoryMakerHome";
import UserStoryNew from "./components/pages/story-maker/UserStoryNew";
import Login from "./components/pages/auth/log-in/Login";
import Register from "./components/pages/auth/register/Register";
import NotFound from "./components/pages/not-found/NotFound";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase/firebaseLocal";
export default function App() {
  const [logT, setLogT] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log( user);
      } else {
        console.log("user not logged in");
      }
    });
  });
  return (
    <>
      <Routes>
        {/* auth */}
        <Route path="/user/log-in" element={<Login />} />
        <Route path="/user/registration" element={<Register />} />
        {/* private routes */}

        <Route path="/" element={<FeedHome />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/stories" element={<StoryMakerHome />} />
        <Route path="/user/stories/new" element={<UserStoryNew />} />

        {/* public routes */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
