const Card = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className={`flex flex-row  items-center rounded-[20px] shadow-lg p-10 m-[20px]`}
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <img src={props.image} className={`h-[100px] mr-10 p-3 `} alt=" " />
      <div className="flex flex-col justify-center ">
        <h1 className="text-3xl align-middle ">{props.title}</h1>
        <p className="text-lg">{props.subTitle}</p>
      </div>
    </button>
  );
};

export default Card;
