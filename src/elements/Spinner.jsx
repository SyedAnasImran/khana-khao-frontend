import React from "react";
import loader from "../assets/loader-gif.gif";

function Spinner(props) {
  let height = props.isLoading
    ? "h-[350px] delay-90  scale-150 transition ease-in-out"
    : "scale-60 transition ease-in-out";
  return (
    <div className={` ${height} flex items-center justify-center`}>
      <img src={loader} className="h-[60px] " alt="" />
    </div>
  );
}

export default Spinner;
