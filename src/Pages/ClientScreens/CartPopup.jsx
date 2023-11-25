import React from "react";
import "reactjs-popup/dist/index.css";
import CartCard from "../../elements/CartCard";

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
            alt=""
          ></img>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-stretch">
        {Cart.map((item) => {
          return (
            <div key={item.ITEM_ID}>
              <CartCard
                item={item}
                item_count={Cart[Cart.indexOf(item)].count}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            </div>
          );
        })}
      </div>
      <div className="text-end">
        <button
          className=" rounded-full m-2 px-4 py-2 mt-4 text-white text-[10px]  bg-red-600 hover:bg-red-500 shadow-lg  hover:scale-105 transition ease-in-out "
          onClick={() => close()}
        >
          Close
        </button>
        <button
          className=" rounded-full px-4 py-2 mt-4 text-white text-[10px]  bg-cyan-600 hover:bg-cyan-500 shadow-lg  hover:scale-105 transition ease-in-out "
          onClick={() => toggleCheckout(true)}
          disabled={!Cart.length}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
