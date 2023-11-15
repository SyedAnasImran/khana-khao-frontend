import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

export default function MenuItemCard(props) {
  const { item, addToCart, removeFromCart } = props;
  return (
    <div>
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
    </div>
  );
}
