import React from "react";
import Card from "../elements/Card";
import Logo from "../assets/Logo-sticker.png";
import vendors from "../utils/vendorData";
import { useNavigate } from "react-router-dom";

const ChooseSpotPage = () => {
  const navigate = useNavigate();
  const logoutUser = async () => {
    console.log("Logged Out");
    localStorage.removeItem("token");
    navigate("/reg");
  };

  const handleSelect = (key) => {
    console.log(key === 1 ? "Cafe" : key === 2 ? "Bashir" : "Pizza Fast");
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={logoutUser}
          className="w-[100px] bg-orange-400 shadow-lg text-white m-4 p-3 rounded-[20px] hover:bg-orange-300 focus:outline-none hover:scale-105 transition ease-in-out "
        >
          Log Out
        </button>
      </div>
      <img src={Logo} alt="" style={{ height: "125px", margin: "auto" }} />
      <h1 className="text-center  text-orange-800 text-5xl py-[20px]">
        Choose Your Spot!
      </h1>
      <div className="grid grid-cols-1 justify-items-stretch sm:grid-cols-2 xl:grid-cols-3">
        {vendors.map((e) => {
          return (
            <Card
              key={e.cafeid}
              id={e.cafeid}
              height="200px"
              width="auto"
              title={e.name}
              subTitle={e.location}
              color="white"
              bgColor="#ff9344"
              image={e.image}
              onClick={handleSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChooseSpotPage;
