import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputS from "../../../other-components/InputS";
import { useFirebase } from "../../../context/UserContext";

function Register() {
  const navigate = useNavigate();
  const firebaseCreateUser = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [FName, setFName] = useState("");
  const [LName, setLName] = useState("");

  const handelEmail = (value) => {
    setEmail(value);
  };

  const handelFName = (value) => {
    const firstName = value?.toUpperCase();
    setFName(firstName);
  };
  const handelLName = (value) => {
    const lastName = value?.toUpperCase();
    setLName(lastName);
  };
  const handelPassword = (value) => {
    setPassword(value);
  };
  const handelRegister = async (e) => {
    e.preventDefault();
    try {
      firebaseCreateUser.regUser(email, password);
      navigate("/");
      setUserInfoToDb();
    } catch (error) {
      console.log(error.massage);
    }
  };

  const setUserInfoToDb = () => {
    try {
      firebaseCreateUser.addUserToRealTimeDataBaseFirebase(`/users/${FName}`, {
        date: new Date(),
        email,
        password,
        name: `${FName} ${LName}`,
      });
    } catch (error) {
      console.log(error.massage);
    }
  };
  return (
    <form
      className="log_in_component flex h-screen flex-col items-center justify-center "
      onSubmit={handelRegister}
    >
      <div
        className={` relative z-10 mx-auto flex max-h-[350px] max-w-[350px] flex-col  items-center justify-center gap-6 rounded-md  bg-purple-300/20 p-5 `}
      >
        <h1 className="text-center text-4xl font-semibold text-white">
          Register
        </h1>
        <div className="flex flex-row gap-8">
          <InputS
            className=" w-full rounded-md border border-purple-950/10
          bg-purple-500/10 px-3 py-1 text-center text-lg
          text-white/80 outline-none transition-all duration-200 ease-in placeholder:text-center placeholder:text-lg placeholder:text-purple-300  hover:bg-purple-500 focus:border-purple-200"
            placeholder="First Name"
            type="text"
            inputValue={handelFName}
          />
          <InputS
            className=" w-full rounded-md border border-purple-950/10
          bg-purple-500/10 px-3 py-1 text-center text-lg
          text-white/80 outline-none transition-all duration-200 ease-in placeholder:text-center placeholder:text-lg placeholder:text-purple-300  hover:bg-purple-500 focus:border-purple-200"
            placeholder="Last Name"
            type="text"
            inputValue={handelLName}
          />
        </div>
        <InputS
          className=" w-full rounded-md border border-purple-950/10
        bg-purple-500/10 px-3 py-1 text-center text-lg
        text-white/80 outline-none transition-all duration-200 ease-in placeholder:text-center placeholder:text-lg placeholder:text-purple-300  hover:bg-purple-500 focus:border-purple-200"
          placeholder="Enter Email"
          type="email"
          inputValue={handelEmail}
        />
        <InputS
          className=" w-full rounded-md border border-purple-950/10
        bg-purple-500/10 px-3 py-1 text-center text-lg
        text-white/80 outline-none transition-all duration-200 ease-in placeholder:text-center placeholder:text-lg placeholder:text-purple-300 hover:bg-purple-500  focus:border-purple-200"
          placeholder="Enter Password"
          type="password"
          inputValue={handelPassword}
        />
        <>
          <button
            type="submit"
            className="rounded-md bg-purple-400 px-4 py-1 text-lg text-white transition-all duration-500  ease-out  hover:bg-purple-300"
          >
            Register
          </button>
          <span className="text-white/50">
            Already Have a Account{" "}
            <Link to="/user/log-in" className="text-white/90">
              Log In here{" "}
            </Link>
          </span>
        </>
      </div>
    </form>
  );
  // const before =
  //   " before:contents-[' '] before:absolute before:-z-10 before:h-full before:w-full  before:rotate-[-10deg] before:transform before:rounded-lg before:bg-white/10 before:-translate-y-10";
  // const after =
  //   " after:contents-[' '] after:absolute after:-z-10 after:h-full after:w-full  after:rotate-[10deg] after:transform after:rounded-lg after:bg-white/10 after:translate-y-10";
}

export default Register;
