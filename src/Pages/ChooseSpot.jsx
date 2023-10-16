import React from "react";
import Card from "../elements/Card";
import Logo from "../assets/Logo-sticker.png";

function ChooseSpotPage() {
  let spot = {
    name: "Spot Name A",
    location: "Spot Location A",
  };
  let arr = Array.from({ length: 7 }).fill(spot);

  return (
    <div className="bg-orange-100 h-[100vh] ">
      <img src={Logo} style={{ height: "125px", margin: "auto" }} />
      <h1 className="text-center  text-orange-800 text-5xl py-[20px]">
        Choose Your Spot!
      </h1>
      <div className="grid grid-cols-1 justify-items-stretch sm:grid-cols-2 xl:grid-cols-4">
        {arr.map((e) => {
          return (
            <Card
              height="200px"
              width="auto"
              title={e.name}
              subTitle={e.location}
              color="white"
              bgColor="#fb923c"
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChooseSpotPage;
