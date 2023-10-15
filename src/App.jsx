import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import FeedHome from "./components/pages/feed/FeedHome";
import UserProfile from "./components/pages/profile/UserProfile";
import StoryMakerHome from "./components/pages/story-maker/StoryMakerHome";
import UserStoryNew from "./components/pages/story-maker/UserStoryNew";
import Login from "./components/pages/auth/log-in/Login";
import Register from "./components/pages/auth/register/Register";
import NotFound from "./components/pages/not-found/NotFound";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase/firebaseLocal";
import { Navigate, useLocation, Outlet } from "react-router-dom";
export default function App() {
  const [user, setUser] = useState(false);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    UserLoggedIn();
  }, [user]);
  const location = useLocation();
  const UserLoggedIn = () => {
    onAuthStateChanged(auth, (authUser) => {
      const storedAccessToken = localStorage.getItem("AccessToken");
      if (authUser) {
        setUrl("/user/log-in");
        if (authUser.accessToken !== storedAccessToken) {
          setUser(false); //User is logged out
          setUrl("/user/registration");
        } else {
          setUser(true); // User is logged in
        }
      } else {
        setUrl("/user/log-in");
        setUser(false); // User is logged out
      }
    });
  };
  const Redirect = () => {
    return user ? (
      <Outlet />
    ) : (
      <Navigate to={url} state={{ from: location }} replace />
    );
  };
  return (
    <>
      <Routes>
        {/* auth */}
        <Route path="/user/log-in" element={<Login />} />
        <Route path="/user/registration" element={<Register />} />
        {/* private routes */}

        <Route element={<Redirect />}>
          <Route path="/" element={<FeedHome />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/stories" element={<StoryMakerHome />} />
          <Route path="/user/stories/new" element={<UserStoryNew />} />
        </Route>

        {/* public routes */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}