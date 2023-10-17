import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { app, auth } from "../firebase/firebaseLocal";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
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
      } else {
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

  const db = getDatabase(app);
  const addUserToRealTimeDataBaseFirebase = (key, data) => {
    set(ref(db, key), data);
  };

  return (
    <FirebaseUserContext.Provider
      value={{ regUser, logUser, logOut, addUserToRealTimeDataBaseFirebase }}
    >
      {children}
    </FirebaseUserContext.Provider>
  );
};
