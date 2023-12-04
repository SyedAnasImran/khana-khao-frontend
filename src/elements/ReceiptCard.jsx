import React from "react";

export default function ReceiptCard(props) {
  const { item } = props;

  return (
    <div>
      <div className="flex flex-row  justify-between align-center text-orange-500 rounded-[10px] shadow-sm  ">
        <div className="flex flex-row items-center">
          <div className="ml-5 font-bold text-cyan-600  ">{item.count}x</div>

          <img
            src={item.IMG}
            className={`h-[40px] p-3 `}
            style={{ borderRadius: "50px" }}
            alt=""
          />
          <div key={item.id} className="flex flex-row items-center p-2 ">
            <h3 className="text-sm font-semibold  ">{item.ITEM_NAME}</h3>
            <p className="text-sm text-gray-400 pl-2">Rs.{item.PRICE}</p>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center ">
          <div className="px-2 text-orange-500  font-semibold">
            Rs.{item.count * item.PRICE}
          </div>
        </div>
      </div>
    </div>
  );
}
