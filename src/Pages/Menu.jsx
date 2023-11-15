// src/components/Menu.js
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import menuData from "../utils/menuItemsData";
import { useParams } from "react-router-dom";

const Menu = () => {
  let { cafe } = useParams();
  let cart = [];

  //Add to Cart
  function addToCart(item) {
    if (cart.includes(item)) {
      item.count++;
    } else {
      item.count = 1;
      cart.push(item);
    }
    console.log(cart);
  }

  //Remove From Cart
  function removeFromCart(item) {
    item.count > 1 ? item.count-- : cart.pop(item);
    console.log(cart);
  }
  return (
    //container
    <div className="container mx-auto mt-8 ">
      <h1 className="text-2xl text-orange-600 text-center font-bold">{cafe}</h1>
      <h2 className="text-xl text-orange-600 text-center font-regular mb-6">
        Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10 justify-items-stretch ">
        {menuData.map((item) => (
          <div className="flex flex-row justify-between align-center text-orange-500  p-[10px]  rounded-[10px] shadow-md  hover:bg-orange-50  ">
            <div key={item.id} className="flex flex-col p-2 ">
              <h3 className="text-xl font-semibold  ">{item.name}</h3>
              <p className="text-gray-500 mb-2 text-xs">Test item</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col items-center">
                <button className="hover:scale-125 p-2transition ease-in-out">
                  <AddCircleIcon
                    fontSize="medium"
                    onClick={() => addToCart(item)}
                  />
                </button>
                <button className="hover:scale-125 p-2 transition ease-in-out">
                  <RemoveCircleRoundedIcon
                    fontSize="medium"
                    onClick={() => removeFromCart(item)}
                  />
                </button>
              </div>
              <img
                src={item.img}
                className={`h-[80px] p-3 `}
                style={{ borderRadius: "20%" }}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
