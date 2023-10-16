import React, { useState, useEffect } from "react";
import FoodImage from "../assets/food.png"; // Import your food image
import Logo from "../assets/Logo-sticker.png";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import Spinner from "./Spinner";

const RegistrationPage = () => {
  const [signUpFlag, setSignUpFlag] = useState(false);
  const [Loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    setLoading(true);
    setTimeout(() => {
      e === "signup" ? setSignUpFlag(true) : setSignUpFlag(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-evenly px-4 sm:px-6 lg:px-8`}
      style={{ backgroundImage: `url(${FoodImage})` }}
    >
      <img src={Logo} className={`w-[200px] lg:w-[350px] `} />
      <div
        className={`bg-white lg:mt-[100px] px-9 pt-4 pb-10 rounded-lg shadow-2xl w-[350px] mb-[250px]`}
      >
        <Spinner isLoading={Loading} />
        {!signUpFlag && !Loading && <LoginPage func={handleSignup} />}
        {signUpFlag && !Loading && <SignupPage func={handleSignup} />}
      </div>
    </div>
  );
};

export default RegistrationPage;
