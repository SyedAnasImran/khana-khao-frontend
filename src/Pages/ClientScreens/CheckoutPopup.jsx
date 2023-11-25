import React, { useState } from "react";
import ReceiptCard from "../../elements/ReceiptCard";

export default function CheckoutPopup(props) {
  const { close, Cart, toggleCheckout } = props;
  const [Address, setAddress] = useState("");

  //calculate Total Bill
  const calTotalBill = () => {
    let bill = 0;
    Cart.forEach((item) => {
      bill += item.count * item.PRICE;
    });
    return bill;
  };

  //Confirm Order
  const confirmOrder = (e) => {
    alert("Your Order Is Confirmed");
  };

  return (
    <div className="modal p-5 text-center ">
      <h5 className="text-orange-600 font-bold text-2xl">Check Out</h5>
      <p className="text-cyan-600  text-md">Your Items</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-stretch">
        {Cart.map((item) => {
          return (
            <div key={item.ITEM_ID}>
              <ReceiptCard item={item} />
            </div>
          );
        })}
      </div>
      <div className=" flex flex-row justify-end rounded-t-xl my-2 py-2 px-3  text-orange-500 text-2xl font-bold bg-orange-100">
        <div className="mr-6  font-light">Total </div>
        <div>Rs.{calTotalBill(Cart)}</div>
      </div>
      <form onSubmit={confirmOrder}>
        <label>
          <input
            placeholder="Enter your Address"
            type="text"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            className="text-sm text-orange-600 w-full px-4 py-2 shadow-sm rounded-b-xl outline outline-1 outline-orange-200  focus:ring-[0.5px] focus:ring-orange-400 focus:outline-none"
            required // This attribute makes the input field mandatory
          />
        </label>
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
          <button
            type={"submit"}
            className="rounded-full px-4 py-2 mx-2 text-white text-[10px]  bg-cyan-600 hover:bg-cyan-400 shadow-lg  hover:scale-105 transition ease-in-out "
          >
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}
