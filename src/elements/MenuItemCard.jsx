import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

export default function MenuItemCard(props) {
  const { item, addToCart, removeFromCart, item_count } = props;

  return (
    <div>
      <div className="flex flex-row justify-between align-center text-orange-500  p-[10px]  rounded-[10px] shadow-md  hover:bg-orange-50  ">
        <div key={item.ITEM_ID} className="flex flex-col">
          <h3 className="text-xl font-semibold  ">{item.ITEM_NAME}</h3>
          <p className="text-gray-400 h-[20px] my-2 text-xs">
            {item.DESCRIPTION.slice(0, 45)}
          </p>
          <p>Rs.{item.PRICE}</p>
        </div>
        <div className="flex flex-row items-center p-2">
          <div className="flex flex-col items-center">
            <button className="hover:scale-125  transition ease-in-out">
              <AddCircleIcon
                fontSize="medium"
                onClick={() => addToCart(item)}
              />
            </button>
            {/* Item Count */}
            {item_count}
            <button className="hover:scale-125 transition ease-in-out">
              <RemoveCircleRoundedIcon
                fontSize="medium"
                onClick={() => removeFromCart(item)}
              />
            </button>
          </div>
          <img
            src={item.IMG}
            className={`h-[80px] w-[80px] p-3 `}
            style={{ borderRadius: "20%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
