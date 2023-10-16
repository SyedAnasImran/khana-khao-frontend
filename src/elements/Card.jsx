import React, { useEffect } from "react";

const Card = (props) => {
  return (
    <div
      className={`flex flex-col justify-center bg-white rounded-[20px] shadow-lg px-10 m-[20px]`}
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <h1 className="text-3xl align-middle ">{props.title}</h1>
      <p className="text-lg">{props.subTitle}</p>
    </div>
  );
};

export default Card;
