// src/components/Menu.js
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
  {
    id: 4,
    name: "Pizza",
    price: 12,
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg",
  },
  {
    id: 5,
    name: "Salad",
    price: 8,
    img: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg",
  },
  // Add more items as needed
];

const Menu = () => {
  return (
    //container
    <div className="container mx-auto mt-8 ">
      <h2 className="text-2xl text-orange-600 text-center font-semibold mb-6">
        Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10 justify-items-stretch ">
        {menuItems.map((item) => (
          <div className="flex flex-row justify-between align-center text-orange-500  p-[10px]  rounded-[10px] shadow-md  hover:bg-orange-50  ">
            <div key={item.id} className="flex flex-col p-2 ">
              <h3 className="text-xl font-semibold  ">{item.name}</h3>
              <p className="text-gray-500 mb-2 text-xs">Test item</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-row items-center">
              <button className="hover:scale-125 transition ease-in-out">
                <AddCircleIcon fontSize="large" />
              </button>
              <img src={item.img} className={`h-[80px] p-3 `} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
