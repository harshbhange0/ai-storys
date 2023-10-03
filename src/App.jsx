import React from "react";
import { Route, Routes } from "react-router-dom";
import Feeds from "./pages/feeds/Feeds";
import Dashboard from "./pages/post/Dashboard";
import NotFoundPage from "./pages/not_found_page/NotFoundPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feeds />} />
        <Route path="/user/generate/story" element={<Dashboard />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
