import React from "react";
import "reactjs-popup/dist/index.css";
import MenuItemCard from "../../elements/MenuItemCard";

export default function CartPopup(props) {
  const { close, Cart, addToCart, removeFromCart, toggleCheckout } = props;
  return (
    <div className="modal p-5 text-center ">
      <h5 className="text-orange-600 font-bold text-2xl">Cart</h5>
      <p className="text-cyan-600  text-md">Your Items</p>
      <div>
        {!Cart.length && (
          <img
            className="block mx-[auto] w-[100px] text-center"
            src="https://cdn.icon-icons.com/icons2/2785/PNG/512/trolley_cart_cancel_icon_177409.png"
          ></img>
        )}
      </div>

      {Cart.map((item) => {
        return (
          <div className="p-3">
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
      <div className="text-end">
        <button
          className=" rounded-full m-2 px-4 py-2 mt-4 text-white text-[10px]  bg-orange-600 hover:bg-orange-500 shadow-lg  hover:scale-105 transition ease-in-out "
          onClick={() => close()}
        >
          Add Items
        </button>
        <button
          className=" rounded-full px-4 py-2 mt-4 text-white text-[10px]  bg-cyan-600 hover:bg-cyan-500 shadow-lg  hover:scale-105 transition ease-in-out "
          onClick={() => toggleCheckout(true)}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
