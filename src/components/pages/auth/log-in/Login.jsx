import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputS from "../../../other-components/InputS";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseLocal";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelEmail = (value) => {
    setEmail(value);
  };
  const handelPassword = (value) => {
    setPassword(value);
  };

  const handelLogIn = async (e) => {
    e.preventDefault();
    try {
      const newUser = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(newUser);
    } catch (error) {
      console.log(error.massage);
    }
  };
  return (
    <form
      className="log_in_component flex h-screen flex-col items-center justify-center "
      onSubmit={handelLogIn}
    >
      <div
        className={` relative z-10 mx-auto flex max-h-[350px] max-w-[350px] flex-col  items-center justify-center gap-6 rounded-md  bg-purple-300/20 p-5 `}
      >
        <h1 className="text-center text-4xl font-semibold text-white">
          Log In{" "}
        </h1>
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
            Log In
          </button>
          <span className="text-white/50">
            Don't Have a Account{" "}
            <Link to="/user/registration" className="text-white/90">Register here </Link>
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

export default Login;
