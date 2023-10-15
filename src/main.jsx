import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseProvider } from "./components/context/UserContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </BrowserRouter>,
);
