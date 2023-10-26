import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../context/UserContext";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Link, Navigate } from "react-router-dom";
import ReactLoading from "react-loading";

const Register = () => {
  document.title = "AiStory.io | Register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false); // State for loading indicator
  const { user } = useFirebase();

  const handleInputEmail = (value) => {
    setEmail(value);
  };

  const handleInputPassword = (value) => {
    setPassword(value);
  };

  const handleInputFirstName = (value) => {
    setFirstName(value);
  };

  const handleInputLastName = (value) => {
    setLastName(value);
  };

  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set a loading state to show the loading indicator
      setLoading(true);

      await firebase.RegisterUserWithEmailAndPassword(email, password,firstName,lastName);
      await firebase.setUserToFirebaseDatabase(`/users/${firstName}`, {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      });

      // Wait for 200ms before navigating
      setTimeout(() => {
        setLoading(false); // Remove the loading indicator
        // Redirect the user
        if (!user) {
          return <Navigate to="/" />;
        }
      }, 100);
    } catch (error) {
      console.log(error);
      setLoading(false); // Remove the loading indicator in case of an error
    }
  };

  useEffect(() => {
    firebase.checkUserLoggedIn();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <ReactLoading type="spin" color="#4632a8" height={20} width={30} />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-tl from-purple-200 via-indigo-200 to-purple-200 md:w-screen">
      <form
        onSubmit={handleSubmit}
        className="flex h-auto w-full max-w-xs flex-col gap-2 rounded-md bg-gradient-to-tr from-purple-200 via-blue-800/20 to-emerald-700/20 px-4 py-8 shadow-md shadow-purple-400 sm:max-w-sm sm:px-3 md:gap-4"
      >
        <h1 className="my-5 text-center text-3xl font-semibold text-gray-600">
          Register With{" "}
          <span className="bg-gradient-to-tr from-blue-500 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            AiStory.io
          </span>
        </h1>
        <div className="flex h-full w-full flex-col items-center justify-between gap-2 sm:flex-row md:gap-4">
          <Input
            type="text"
            placeholder="First Name"
            Value={handleInputFirstName}
            className="my-3 w-full rounded-sm px-2 py-1 shadow-md placeholder:text-center hover-bg-gray-100 focus-bg-gray-100"
          />
          <Input
            type="text"
            placeholder="Last Name"
            Value={handleInputLastName}
            className="my-3 w-full rounded-sm px-2 py-1 shadow-md placeholder:text-center hover-bg-gray-100 focus-bg-gray-100"
          />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 md:gap-4">
          <Input
            type="email"
            placeholder="Email"
            Value={handleInputEmail}
            className="my-3 w-full rounded-sm px-2 py-1 shadow-md placeholder:text-center hover-bg-gray-100 focus-bg-gray-100"
          />
          <Input
            type="password"
            placeholder="Password"
            Value={handleInputPassword}
            className="w-full rounded-sm px-2 py-1 shadow-md placeholder:text-center hover-bg-gray-100 focus-bg-gray-100"
            inputContainerClass="my-3"
          />
        </div>
        <div className=" flex w-full items-center justify-center">
          <Button className="rounded-sm bg-white px-4 py-2 font-[500] shadow-md transition-colors duration-100 ease-in hover-bg-gray-100 active-bg-gray-200">
            Register
          </Button>
        </div>
        <span className="mx-auto text-gray-900">
          Already have an account ?{" "}
          <Link
            to="/user/login"
            className="text-gray-800 underline underline-offset-2"
          >
            Log In
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
