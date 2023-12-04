import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

export default function CartCard(props) {
  const { item, addToCart, removeFromCart, item_count } = props;

  return (
    <div className="flex flex-row  m-2 justify-between align-center text-orange-500  rounded-[10px] shadow-sm  bg-orange-50  ">
      <div className="flex flex-row">
        <img
          src={item.IMG}
          className={`h-[45px] p-3 `}
          style={{ borderRadius: "50px" }}
          alt=""
        />
        <div
          key={item.ITEM_ID}
          className="flex flex-row items-center p-2 text-sm "
        >
          <h3 className=" font-semibold  ">{item.ITEM_NAME}</h3>
          <p className="font-light pl-2 text-gray-500">Rs.{item.PRICE}</p>
        </div>
      </div>
      <div className="flex flex-row items-center ">
        <button className="hover:scale-125  transition ease-in-out">
          <AddCircleIcon fontSize="medium" onClick={() => addToCart(item)} />
        </button>
        <div className="px-2 font-light text-gray-600 ">{item_count}</div>
        <button className="hover:scale-125 transition ease-in-out">
          <RemoveCircleRoundedIcon
            fontSize="medium"
            onClick={() => removeFromCart(item)}
          />
        </button>
        <div className="px-2 ml-6 text-orange-500  font-semibold">
          Rs.{item.count * item.PRICE}
        </div>
      </div>
    </div>
  );
}
