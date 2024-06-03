import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearOrders } from "../state/orderListSlice";
import { setSizeFilter } from "../state/filterSlice";

export default function OrderList() {
  const { orders } = useSelector(st => st.orderList);
  const { size } = useSelector(st => st.sizeFilter);
  const dispatch = useDispatch(); 

  return(
    <div className="container" id="order-list">
      <h2 className="section-header">Orders</h2>

      <ol>
        {!orders.length ? <p>No Orders Currently Placed</p> :
          orders.filter(order => size === 'All' || order.size === size).map((order, idx) => {
            return(
              <li key={idx}>
                {order.fullName} ordered a size {order.size} with {order.toppings.length ? order.toppings.length : 'no'} topping{order.toppings.length === 1 ? '' : 's'}
              </li>
          )
        })}
      </ol>

      <div id="size-filters">
        <h4>Filter By Size</h4>
        <div id="filter-buttons">
          <button
            className={`filter-button ${size === 'All' ? 'active' : ''}`}
            onClick={() => dispatch(setSizeFilter('All'))}
          >All</button>
          <button
            className={`filter-button ${size === 'S' ? 'active' : ''}`}
            onClick={() => dispatch(setSizeFilter('S'))}
          >S</button>
          <button
            className={`filter-button ${size === 'M' ? 'active' : ''}`}
            onClick={() => dispatch(setSizeFilter('M'))}
          >M</button>
          <button
            className={`filter-button ${size === 'L' ? 'active' : ''}`} 
            onClick={() => dispatch(setSizeFilter('L'))}
          >L</button>
        </div>
      </div>

      <div>
        <button onClick={() => dispatch(clearOrders())}>Clear Orders</button>
      </div>
    </div>
  )
}