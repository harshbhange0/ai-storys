import React from "react";
import {
  FeedHome,
  LogIn,
  Register,
  NewStoriesHome,
  Profile,
} from "./pages/export";
import { Route, Routes } from "react-router-dom";
import Redirect from "./utils/Redirect";
function App() {
  return (
    <>
      <Routes>
        <Route path="/user/login" element={<LogIn />} />
        <Route path="/user/register" element={<Register />} />
        <Route element={<Redirect />}>
          <Route path="/" element={<FeedHome />} />/
          <Route path="/user/stories/new/" element={<NewStoriesHome />} />
          <Route path="/user/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
