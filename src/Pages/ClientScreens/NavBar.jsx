import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo3.png";
import MenuIcon from "@mui/icons-material/Menu";

//Logout Function

const Navbar = (props) => {
  const { head, cafe_id } = props;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/reg");
  };

  return (
    <nav className=" p-2 mx-auto shadow-md ">
      <div className="text-orange-500 container mx-auto flex justify-between items-center ">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4  text-xl ">
          <img
            src={Logo}
            className={`w-[40px]`}
            style={{ borderRadius: "20%" }}
            alt=""
          />{" "}
          Khana Khao |
          <h1 className=" lg:text-[20px] text-cyan-500 font-bold">{head}</h1>
        </div>
        {/* Hamburger Icon for small screens */}
        <div className=" sm:hidden">
          <button
            onClick={toggleNavbar}
            className="text-orange-500 focus:outline-none"
          >
            <MenuIcon />
          </button>
        </div>
        {/* Navbar links */}
        <div
          className={`flex flex-col items-end sm:flex sm:flex-row ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href={`/cafe/${head}/${cafe_id}`}
            className="mx-2 px-3 py-1 sm:m-4 hover:bg-orange-600 rounded-[40px] hover:text-white hover:scale-105 transition ease-in-out"
          >
            Menu
          </a>
          <a
            href="/"
            className=" mx-2 px-3 py-1 sm:m-4   hover:bg-orange-600 rounded-[40px] hover:text-white hover:scale-105 transition ease-in-out"
          >
            Switch Cafe
          </a>
          <a
            href={`/cafe/${head}/${cafe_id}/MyOrders`}
            className="mx-2 px-3 py-1 sm:m-4 hover:bg-orange-600 rounded-[40px] hover:text-white hover:scale-105 transition ease-in-out"
          >
            My Orders
          </a>

          <button
            onClick={logoutUser}
            className="w-[60px] h-[30px] mt-3 mr-4 sm:mb-3 lg:w-[100px] text-white text-[10px]  bg-orange-400 hover:bg-cyan-500 shadow-lg  rounded-[20px]  focus:outline-none hover:scale-105 transition ease-in-out "
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
