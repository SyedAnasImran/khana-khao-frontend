import React, { useState } from "react";
import { useEffect } from "react";
import postData from "../utils/postData";

export default function OrderItemCard(props) {
  let { ORDER_ID } = props;
  const [Items, setItems] = useState([]);
  const [Total, setTotal] = useState(0);
  let total = 0;

  const url = "http://localhost:5000/orders/items";
  const updateURL = "http://localhost:5000/orders/updateBill";

  const fetchOrderItems = async () => {
    postData({ ORDER_ID }, url).then(async (result) => {
      console.log("orderitems", result.myOrderItems);
      result.myOrderItems.forEach((e) => {
        total += e.PRICE * e.QTY;
      });
      await postData({ ORDER_ID, total }, updateURL);
      setTotal(total);
      setItems(result.myOrderItems);
    });
  };
  useEffect(() => {
    fetchOrderItems();
  }, []);
  return (
    <div>
      <div className="modal p-5 text-center ">
        <h5 className="text-orange-600 font-bold text-2xl">ITEMS</h5>
        <p className="text-cyan-600  text-md">Your Items</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-stretch">
          {!Items.length ? (
            <h5 className="text-orange-400 font-bold text-xl items-center">
              Ah Snap! Order Items are not available At the Moment
            </h5>
          ) : (
            Items.map((item) => {
              return (
                <div
                  key={item.ORDER_ID}
                  className="flex flex-row  justify-between align-center text-orange-500 rounded-[10px] shadow-sm  text-lg  "
                >
                  <div className="flex flex-row items-center">
                    <div className="ml-5 font-bold text-cyan-600  ">
                      {item.QTY}x
                    </div>
                    <img
                      src={item.IMG}
                      className={`h-[50px] w-[50px] p-3 `}
                      style={{ borderRadius: "50px" }}
                      alt=""
                    />
                    <div
                      key={item.id}
                      className="flex flex-row  items-center p-2 "
                    >
                      <h3 className="font-semibold text-left ">
                        {item.ITEM_NAME}
                      </h3>
                      <p className="text-gray-400 pl-2">Rs.{item.PRICE}</p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-evenly items-center ">
                    <div className="px-2 text-orange-500  font-semibold">
                      Rs.{item.QTY * item.PRICE}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className=" flex flex-row justify-end rounded-b-xl my-2 py-2 px-3  text-orange-500 text-2xl font-bold bg-orange-100">
          <div className="mr-6  font-light">Total </div>
          <div>Rs.{Items.length ? Total : "   -  "}</div>
        </div>
      </div>
    </div>
  );
}
