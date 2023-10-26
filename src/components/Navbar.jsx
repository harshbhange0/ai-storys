import React from "react";
import Button from "./Button";
import { BiSolidExit, BiSolidUser, BiSolidHome } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useFirebase } from "../context/UserContext";
function Navbar() {
  const firebase = useFirebase();
  const LogOut = () => {
    firebase.Logout();
  };
  const { user } = useFirebase();
  return (
    <div className=" Navbar_component flex flex-row items-center justify-around  gap-5  bg-white px-5 py-2 text-2xl shadow-md sm:h-full sm:flex-col sm:py-10 md:px-2 md:py-5 md:text-3xl">
      <Link
        to="/user/stories/new/"
        className="flex flex-col items-center justify-center"
      >
        <Button className="block rounded-full border border-gray-200/90 p-2  transition-all duration-100 ease-linear hover:bg-gray-50 hover:shadow-sm">
          <MdOutlinePlaylistAdd />
        </Button>
        <span className="mx-auto block text-center text-[10px] font-semibold ">
          Add Story
        </span>
      </Link>
      <Link to="/user/profile">
        <Button className="block rounded-full border border-gray-200/90 p-2  transition-all duration-100 ease-linear hover:bg-gray-50 hover:shadow-sm">
          <BiSolidUser />
        </Button>
        <span className="mx-auto block text-center text-[10px] font-semibold">
          Profile
        </span>
      </Link>
      <Link to="/" className="flex flex-col items-center justify-center">
        <Button className="block rounded-full border border-gray-200/90 p-2  transition-all duration-100 ease-linear hover:bg-gray-50 hover:shadow-sm">
          <BiSolidHome />
        </Button>
        <span className="mx-auto block text-center text-[10px] font-semibold">
          Home
        </span>
      </Link>
      <span className="flex flex-col items-center justify-center">
        <Link to={user ? "" : "/user/log-in"}>
          <Button
            onClick={LogOut}
            className="block rounded-full border border-gray-200/90 p-2  transition-all duration-100 ease-linear hover:bg-gray-50 hover:shadow-sm"
          >
            <BiSolidExit />
          </Button>
          <span className="mx-auto block text-center text-[10px] font-semibold">
            {user ? "Log Out" : "Log In"}
          </span>
        </Link>
      </span>
    </div>
  );
}

export default Navbar;
