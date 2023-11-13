// src/components/Menu.js
import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Burger",
    price: 10,
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg",
  },
  {
    id: 2,
    name: "Pizza",
    price: 12,
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg",
  },
  {
    id: 3,
    name: "Salad",
    price: 8,
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg",
  },
  // Add more items as needed
];

const Menu = () => {
  return (
    <div className="container mx-auto mt-8 px-[50px]">
      <h2 className="text-2xl text-orange-600 text-center font-semibold mb-6">
        Menu
      </h2>
      <div className="grid grid-rows gap-4">
        {menuItems.map((item) => (
          <div className="flex flex-row justify-between align-center text-orange-500 bg-white p-[20px] rounded-[10px] shadow-md ]  hover:bg-orange-300  hover:text-white hover:scale-[102%] transition ease-in-out ">
            <div key={item.id} className="flex flex-col ">
              <h3 className="text-xl font-semibold p-2 ">{item.name}</h3>
              <p className="px-2 ">${item.price.toFixed(2)}</p>
            </div>
            <img src={item.img} className={`h-[80px]  mr-10 p-3 `} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
