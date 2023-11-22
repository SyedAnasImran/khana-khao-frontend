import React from "react";

export default function CheckoutPopup(props) {
  const { toggleCheckout } = props;
  return (
    <div className="modal p-5 text-center ">
      <h5 className="text-orange-600 font-bold text-2xl">Check Out</h5>
      <p className="text-cyan-600  text-md">Your Items</p>
      <button
        className=" rounded-full px-4 py-2 mt-4 text-white text-[10px]  bg-cyan-600 hover:bg-cyan-500 shadow-lg  hover:scale-105 transition ease-in-out "
        onClick={() => toggleCheckout(false)}
      >
        Back to Cart
      </button>
    </div>
  );
}
