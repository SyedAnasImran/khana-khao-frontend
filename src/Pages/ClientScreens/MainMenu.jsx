import React, { useState, useEffect } from "react";
import menuData from "../../utils/menuItemsData";
import MenuItemCard from "../../elements/MenuItemCard";
import NavBar from "./NavBar";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { useParams } from "react-router-dom";
import Popup from "reactjs-popup";
import CartPopup from "./CartPopup";
import CheckoutPopup from "./CheckoutPopup";

const MainMenu = () => {
  const { cafe_name } = useParams();
  const [Cart, setCart] = useState([]);
  const [CheckoutFlag, setCheckoutFlag] = useState(false);

  // const [MenuItems, setMenuItems] = useState([]);

  // const url = "";
  // const fetchMenuItems = async () => {
  // const result = await fetch(url);
  // const parsedResult = await result.json();
  // setMenuItems(parsedResult);
  // };

  useEffect(() => {
    // fetchMenuItems();
  }, []);

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

  //Toggle Between Checkout & Cart
  const toggleCheckout = (flag) => {
    setCheckoutFlag(flag);
  };

  return (
    //container
    <div>
      <NavBar head={cafe_name} />
      <div className="container mx-auto ">
        <div className="flex justify-end ">
          {/* Popup window ______________________________________________________________*/}
          <Popup
            contentStyle={{
              borderRadius: "20px",
              minWidth: "300px",
            }}
            trigger={
              <button className="bg-cyan-600  p-2 mt-4 mr-6  font-semibold text-md text-white rounded-full hover:scale-[115%] transition ease-in-out ">
                <ShoppingCartTwoToneIcon fontSize="large" />
              </button>
            }
            modal
            nested
          >
            {(close) =>
              // Popup Content renders Cart OR Checkout conditionally
              {
                return CheckoutFlag ? (
                  <CheckoutPopup toggleCheckout={toggleCheckout} />
                ) : (
                  <CartPopup
                    close={close}
                    Cart={Cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    toggleCheckout={toggleCheckout}
                  />
                );
              }
            }
          </Popup>
          {/* ________________________________________________________________________________*/}
        </div>
        <h2 className="text-[20px] text-orange-500 text-center font-bold mb-6">
          Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10 justify-items-stretch ">
          {
            // MenuItems.length &&
            menuData.map((item) => {
              return (
                <div>
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    item_count={
                      !Cart.includes(item)
                        ? "-"
                        : Cart[Cart.indexOf(item)].count
                    }
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
