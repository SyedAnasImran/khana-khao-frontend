import React, { useState } from "react";
import FoodImage from "../../assets/food.png"; // Import your food image
import Logo from "../../assets/Logo-sticker.png";
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";
import Spinner from "../../elements/Spinner";

/*
_______________________________________________________________________________________

  This is the Registration Page which uses "Login" and "Signup" boxes as components,
  Login is the intial component, while Signup is rendred conditionally using signupFlag 
_______________________________________________________________________________________

  */

const RegistrationPage = () => {
  const [signUpFlag, setSignUpFlag] = useState(false);
  const [Loading, setLoading] = useState(false);

  // handleSignup is the controller function for
  // loading signup and login pages conditionally

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
      <img src={Logo} alt="" className={`w-[200px] lg:w-[350px] `} />
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
