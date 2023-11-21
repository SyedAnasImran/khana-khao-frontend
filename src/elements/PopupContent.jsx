import React from "react";
import "reactjs-popup/dist/index.css";
import MenuItemCard from "../elements/MenuItemCard";

export default function PopupContent(props) {
  const { close, Cart, addToCart, removeFromCart } = props;
  return (
    <div className="modal p-5 ">
      {Cart.map((item) => {
        return (
          <div>
            <MenuItemCard
              key={item.id}
              item={item}
              item_count={Cart[Cart.indexOf(item)].count}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          </div>
        );
      })}
      <div>
        <button
          className=" rounded-full px-4 py-2 mt-4 text-white text-[10px]  bg-cyan-600 hover:bg-cyan-500 shadow-lg  hover:scale-105 transition ease-in-out "
          onClick={() => close()}
        >
          Close
        </button>
      </div>
    </div>
  );
}
