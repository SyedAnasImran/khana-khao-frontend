// src/components/Menu.js
import React from "react";
import menuData from "../../utils/menuItemsData";
import { useParams, useNavigate } from "react-router-dom";
import MenuItemCard from "../../elements/MenuItemCard";
import NavBar from "./NavBar";

const Dashboard = () => {
  const navigate = useNavigate();
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
    <div>
      <NavBar cafe={cafe} />
      <div className="container mx-auto ">
        <h1 className="text-[30px] text-cyan-500 text-center mt-8 font-bold">
          {cafe}
        </h1>
        <h2 className="text-[20px] text-orange-500 text-center font-semibold mb-6">
          Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10 justify-items-stretch ">
          {menuData.map((item) => {
            return (
              <MenuItemCard
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
