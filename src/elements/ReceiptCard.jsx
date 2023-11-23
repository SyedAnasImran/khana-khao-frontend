import React from "react";

export default function ReceiptCard(props) {
  const { item } = props;

  return (
    <div>
      <div className="flex flex-row  justify-between align-center text-orange-500  p-[4px]  rounded-[10px] shadow-md  hover:bg-orange-50  ">
        <div className="flex flex-row">
          <img
            src={item.img}
            className={`h-[50px] p-3 `}
            style={{ borderRadius: "50px" }}
            alt=""
          />
          <div key={item.id} className="flex flex-col p-2 ">
            <h3 className="text-md font-semibold  ">{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex flex-row items-center ">
          <div className="px-6 font-light text-gray-600 ">{item.count}</div>
          <div className="px-2 text-orange-500  font-semibold">
            ${item.count * item.price}
          </div>
        </div>
      </div>
    </div>
  );
}
