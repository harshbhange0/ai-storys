import React from "react";
import { useFirebase } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function LoggedOutBtn() {
  const firebaseCreateUser = useFirebase();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        firebaseCreateUser.logOut;
        navigate("/user/log-in");
      }}
    >
      logOut
    </button>
  );
}

export default LoggedOutBtn;
