import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import postData from "../../utils/postData";
import Popup from "reactjs-popup";
import OrderItemCard from "../../elements/OrderItemCard";

export default function MyOrders() {
  const [Orders, setOrders] = useState([]);

  const { cafe_name, cafe_id } = useParams();
  const customer_id = localStorage.getItem("email");

  //fetching menu from api
  const url = "http://localhost:5000/orders/myOrders";
  const fetchMyOrders = async () => {
    postData({ customer_id, cafe_id }, url).then((result) => {
      console.log(result.myOrders);
      setOrders(result.myOrders);
    });
  };
  useEffect(() => {
    fetchMyOrders();
  }, []);

  return (
    <div>
      <Navbar head={cafe_name} cafe_id={cafe_id} />
      <div className="grid grid-cols-1 p-10 gap-8 justify-items-stretch sm:grid-cols-3 xl:grid-cols-4">
        {!Orders.length ? (
          <h3 className="text-left text-cyan-500 text-[50px] font-bold">
            No Orders Yet, Start Ordering from Menu
          </h3>
        ) : (
          Orders.map((order) => {
            return (
              <Popup
                key={order.ORDER_ID}
                contentStyle={{
                  borderRadius: "20px",
                  minWidth: "300px",
                  maxWidth: "1000px",
                }}
                trigger={
                  <button className="flex flex-row items-center justify-between p-3 shadow-md  rounded-2xl bg-cyan-500  hover:scale-105 transition ease-in-out">
                    <div className="flex flex-row text-cyan-500 bg-cyan-50 p-3 rounded-2xl items-center">
                      <h1 className="text-2xl font-light">Receipt ID</h1>
                      <h2 className="px-2 text-2xl font-semibold">
                        {order.ORDER_ID}
                      </h2>
                    </div>
                    <div className="flex flex-row text-white items-center">
                      <h1 className="text-2xl font-light">Total</h1>
                      <h2 className="px-2 text-2xl font-semibold">
                        Rs.{order.TOTAL}
                      </h2>
                    </div>
                  </button>
                }
                modal
                nested
              >
                {(close) => (
                  <OrderItemCard
                    ORDER_ID={order.ORDER_ID}
                    TOTAL={order.TOTAL}
                  />
                )}
              </Popup>
            );
          })
        )}
        {/* ________________________________________________________________________________*/}
      </div>
    </div>
  );
}
