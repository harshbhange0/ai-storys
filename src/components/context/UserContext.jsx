import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebaseLocal";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useContext } from "react";

const FirebaseUserContext = createContext(null);

export const useFirebase = () => useContext(FirebaseUserContext);

export const FirebaseProvider = ({ children }) => {
  // Callback function to check if the user is logged in
  const checkUserLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userToken = user?.accessToken;
        localStorage.setItem("AccessToken", userToken);
        console.log("User  logged in");
      } else {
        console.log("User not logged in");
      }
    });
  };

  // Register user with Firebase
  const regUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        checkUserLoggedIn(); // Check if the user is logged in after registration
      })
      .catch((error) => {
        console.error("Error registering user: ", error);
      });
  };

  // Login user with Firebase
  const logUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        checkUserLoggedIn(); // Check if the user is logged in after login
      })
      .catch((error) => {
        console.error("Error logging in: ", error);
      });
  };

  // Log out user with Firebase
  const logOut = () => {
    localStorage.removeItem("AccessToken");
    return signOut(auth);
  };

  // When the component mounts, check if the user is logged in
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <FirebaseUserContext.Provider value={{ regUser, logUser, logOut }}>
      {children}
    </FirebaseUserContext.Provider>
  );
};
