import React, { useState } from "react";
import menuData from "../../utils/menuItemsData";
import MenuItemCard from "../../elements/MenuItemCard";
import NavBar from "./NavBar";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import PopupContent from "../../elements/PopupContent";

const MainMenu = () => {
  const [Cart, setCart] = useState([]);
  const { cafe_name } = useParams();

  //Add to Cart
  function addToCart(item) {
    let new_cart = [...Cart];
    if (new_cart.includes(item)) {
      item.count++;
    } else {
      item.count = 1;
      new_cart.push(item);
    }
    setCart(new_cart);

    console.log(Cart);
  }

  //Remove From Cart
  function removeFromCart(item) {
    let new_cart = [...Cart];
    item.count > 1 ? item.count-- : new_cart.pop(item);
    setCart(new_cart);
    console.log(Cart);
  }

  return (
    //container
    <div>
      <NavBar head={cafe_name} />
      <div className="container mx-auto ">
        <div className="flex justify-end ">
          <Popup
            trigger={
              <button className="bg-cyan-600  p-2 mt-4 mr-6  font-semibold text-md text-white rounded-full hover:scale-[115%] transition ease-in-out ">
                <ShoppingCartTwoToneIcon fontSize="large" />
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <PopupContent
                close={close}
                Cart={Cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            )}
          </Popup>
        </div>
        <h2 className="text-[20px] text-orange-500 text-center font-bold mb-6">
          Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10 justify-items-stretch ">
          {menuData.map((item) => {
            return (
              <div>
                <MenuItemCard
                  key={item.id}
                  item={item}
                  item_count={
                    !Cart.includes(item) ? "-" : Cart[Cart.indexOf(item)].count
                  }
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
