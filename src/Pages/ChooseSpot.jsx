import React from "react";
import Card from "../elements/Card";
import Logo from "../assets/Logo-sticker.png";
import vendors from "../utils/vendorData";

const ChooseSpotPage = () => {
  const handleSelect = () => {
    console.log("clicked");
  };

  return (
    <div>
      <img src={Logo} alt="" style={{ height: "125px", margin: "auto" }} />
      <h1 className="text-center  text-orange-800 text-5xl py-[20px]">
        Choose Your Spot!
      </h1>
      <div className="grid grid-cols-1 justify-items-stretch sm:grid-cols-2 xl:grid-cols-3">
        {vendors.map((e) => {
          return (
            <Card
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
