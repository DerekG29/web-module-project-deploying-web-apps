import React from "react";
import { useSelector } from "react-redux";

export default function OrderList() {
  const { orders } = useSelector(st => st.orderList);

  return(
    <div id="orderList">
      <h2>Pizza Orders</h2>

      <ul>
        {orders.map((order, idx) => {
          return(
            <li key={idx}>{order.fullName} ordered a size {order.size} with {order.toppings.length ? order.toppings.length : 'no'} topping{order.toppings.length === 1 ? '' : 's'}</li>
          )
        })}
      </ul>

      <div id="sizeFilters">
        Filter By Size:
      </div>
    </div>
  )
}