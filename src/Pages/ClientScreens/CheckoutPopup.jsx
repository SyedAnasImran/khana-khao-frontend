import React from "react";
import ReceiptCard from "../../elements/ReceiptCard";

export default function CheckoutPopup(props) {
  const { close, Cart, toggleCheckout } = props;

  const calTotalBill = () => {
    let bill = 0;
    Cart.forEach((item) => {
      bill += item.count * item.price;
    });
    return bill;
  };

  return (
    <div className="modal p-5 text-center ">
      <h5 className="text-orange-600 font-bold text-2xl">Check Out</h5>
      <p className="text-cyan-600  text-md">Your Items</p>

      {Cart.map((item) => {
        return (
          <div className="p-2">
            <ReceiptCard key={item.id} item={item} />
          </div>
        );
      })}
      <div className=" flex flex-row justify-end rounded-xl m-2 py-3 px-3  text-orange-500 text-2xl font-bold bg-orange-100">
        <div className="mr-6  font-light">Total </div>
        <div>${calTotalBill(Cart)}</div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div>
          <button
            className=" rounded-full m-3 px-4 py-2 text-white text-[10px]  bg-red-600 hover:bg-red-500 shadow-lg  hover:scale-105 transition ease-in-out "
            onClick={() => {
              toggleCheckout(false);
              close();
            }}
          >
            Close
          </button>
          <button
            className=" rounded-full px-4 py-2  text-white text-[10px]  bg-orange-400 hover:bg-orange-300 shadow-lg  hover:scale-105 transition ease-in-out "
            onClick={() => toggleCheckout(false)}
          >
            Back to Cart
          </button>
        </div>
        <button className="rounded-full px-4 py-2 mx-2 text-white text-[10px]  bg-cyan-600 hover:bg-cyan-400 shadow-lg  hover:scale-105 transition ease-in-out ">
          Confirm Order
        </button>
      </div>
    </div>
  );
}
