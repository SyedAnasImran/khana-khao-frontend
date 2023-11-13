const Card = (props) => {
  const { id, height, width, title, subTitle, color, bgColor, image, onClick } =
    props;

  return (
    <button
      onClick={() => onClick(id)}
      className={`flex flex-row  items-center rounded-[20px] shadow-lg p-10 m-[20px] hover:scale-105 transition ease-in-out`}
      style={{
        height: height,
        width: width,
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <img src={image} className={`h-[100px] mr-10 p-3 `} alt=" " />
      <div className="flex flex-col justify-center ">
        <h1 className="text-3xl align-middle ">{title}</h1>
        <p className="text-lg">{subTitle}</p>
      </div>
    </button>
  );
};

export default Card;
