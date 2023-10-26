import React, { useContext, useState } from "react";
import { createContext } from "react";
import { authFireBase, firebaseDB } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { set, ref } from "firebase/database";
import { useEffect } from "react";

const FirebaseUserContext = createContext(false);

const useFirebase = () => useContext(FirebaseUserContext);

const FirebaseProvider = ({ children }) => {
  const setUserToFirebaseDatabase = (key, data) => {
    try {
      set(ref(firebaseDB, key), data);
    } catch (error) {
      console.log(error);
    }
  };

  const LogInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(authFireBase, email, password).then(
        (user) => {
          if (user !== null) {
            checkUserLoggedIn();
          } else {
            console.log("checkUserLoggedIn error", user);
          }
        },
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const RegisterUserWithEmailAndPassword = async (
    email,
    password,
    fName,
    lName,
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        authFireBase,
        email,
        password,
      );
      const user = userCredential.user;

      if (user) {
        await updateProfile(user, {
          displayName: `${fName} ${lName}`,
        });
        checkUserLoggedIn();
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.error("Error during user registration:", error);
    }
  };

  // log out the user from Firebase
  const Logout = () => {
    signOut(authFireBase).then((user) => {
      if (user !== null) {
        checkUserLoggedIn();
      } else {
        console.log("checkUserLoggedIn error", user);
      }
    });
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // Function to check if a user is logged in
  const checkUserLoggedIn = async () => {
    await onAuthStateChanged(authFireBase, (user) => {
      setUser(user);
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to true before checking user state
      }, 500);
    });
  };
  return (
    <FirebaseUserContext.Provider
      value={{
        LogInWithEmailAndPassword,
        RegisterUserWithEmailAndPassword,
        setUserToFirebaseDatabase,
        Logout,
        checkUserLoggedIn,
        user,
        isLoading,
      }}
    >
      {children}
    </FirebaseUserContext.Provider>
  );
};

export { useFirebase, FirebaseProvider };
