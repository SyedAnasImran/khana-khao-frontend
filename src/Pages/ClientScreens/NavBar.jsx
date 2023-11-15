import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo0.png";

//Logout Function

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    navigate("/reg");
  };

  return (
    <nav className="bg-orange-500 p-4 mx-auto shadow-md">
      <div className="text-white container mx-auto flex justify-between items-center">
        <div className="flex flex-row items-center gap-4 text-xl text-bold ">
          <img
            src={Logo}
            className={`w-[20px] lg:w-[50px]`}
            style={{ borderRadius: "50%" }}
            alt=""
          />{" "}
          Khana Khao | The Cafe Provider
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {/* Navbar links */}
        <div
          className={`flex flex-col items-end lg:flex lg:flex-row ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href={`/${props.cafe}`}
            className="mx-2 px-3 py-1 lg:m-4 hover:bg-orange-600 rounded-[40px] hover:scale-105 transition ease-in-out"
          >
            Home
          </a>
          <a
            href="/"
            className=" mx-2 px-3 py-1 lg:m-4   hover:bg-orange-600 rounded-[40px] hover:scale-105 transition ease-in-out"
          >
            Switch Cafe
          </a>
          <a
            href="#"
            className="mx-2 px-3 py-1 lg:m-4 hover:bg-orange-600 rounded-[40px] hover:scale-105 transition ease-in-out"
          >
            My Orders
          </a>

          <button
            onClick={logoutUser}
            className="w-[60px] h-[30px] mt-3 mr-4 lg:mb-3 lg:w-[100px] text-[10px]  bg-orange-400 hover:bg-cyan-500 shadow-lg  rounded-[20px]  focus:outline-none hover:scale-105 transition ease-in-out "
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
