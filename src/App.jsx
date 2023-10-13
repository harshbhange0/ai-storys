import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedHome from "./components/pages/feed/FeedHome";
import UserProfile from "./components/pages/profile/UserProfile";
import StoryMakerHome from "./components/pages/story-maker/StoryMakerHome";
import UserStoryNew from "./components/pages/story-maker/UserStoryNew";
import Login from "./components/pages/auth/log-in/Login";
import Register from "./components/pages/auth/register/Register";
import NotFound from "./components/pages/not-found/NotFound";

export default function App() {
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
