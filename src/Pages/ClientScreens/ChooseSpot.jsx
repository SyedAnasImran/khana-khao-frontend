import React, { useEffect, useState } from "react";
import Card from "../../elements/Card";
import Logo from "../../assets/Logo-sticker.png";
import { useNavigate } from "react-router-dom";
import Spinner from "../../elements/Spinner";

const ChooseSpotPage = () => {
  //Hooks
  const navigate = useNavigate();
  const [CafeData, setCafeData] = useState([]);
  const [Loading, setLoading] = useState(false);
  //API url
  const url = "http://localhost:5000/cafe/names";

  // fetch data from api
  const fetchCafeNames = async () => {
    const result = await fetch(url);
    const parsedResult = await result.json();
    setCafeData(parsedResult);
  };

  //useeffect
  useEffect(() => {
    fetchCafeNames();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //Link to Cafe On Click
  const handleSelect = (cafe_name, cafe_id) => {
    navigate(`/cafe/${cafe_name}/${cafe_id}`);
  };

  return (
    <div>
      {Loading && <Spinner isLoading={true} />}
      {CafeData.length && !Loading && (
        <div>
          <div className="flex justify-end"></div>
          <img src={Logo} alt="" style={{ height: "125px", margin: "auto" }} />
          <h1 className="text-center  text-orange-800 text-5xl py-[20px]">
            Choose Your Spot!
          </h1>
          <div className="grid grid-cols-1 justify-items-stretch sm:grid-cols-2 xl:grid-cols-3">
            {CafeData.map((e) => {
              return (
                <Card
                  key={e.CAFE_ID}
                  id={e.CAFE_ID}
                  height="200px"
                  width="auto"
                  title={e.CAFE_NAME}
                  subTitle={e.LCOATION}
                  color="white"
                  bgColor="#ff9344"
                  image={e.IMAGE}
                  onClick={() => handleSelect(e.CAFE_NAME, e.CAFE_ID)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseSpotPage;
