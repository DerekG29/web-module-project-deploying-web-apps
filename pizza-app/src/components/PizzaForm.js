import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setSize, setToppings, resetForm } from "../state/pizzaFormSlice";
import { addOrder, clearOrders } from "../state/orderListSlice";

export default function PizzaForm() {
  const state = useSelector(st => st.pizzaForm);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const sizeRef = useRef(null);

  const onSubmit = evt => {
    evt.preventDefault();
    const { fullName, size } = state;
    const toppings =
      ['Pepperoni', 'Green Peppers', 'Pineapple', 'Mushrooms', 'Ham']
        .filter(topping => state[topping]);
    const order = { fullName, size, toppings};
    dispatch(addOrder(order))
    dispatch(resetForm())
  }

  return(
    <form onSubmit={onSubmit}>
      <h2>Pizza Form</h2>

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input 
            id="fullname"
            name="fullname"
            placeholder="Type Full Name"
            type="text"
            value={state.fullName}
            ref={nameRef}
            onChange={() => dispatch(setName(nameRef.current.value))}
            required
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label>
          <select
            id="size"
            name="size"
            value={state.size}
            ref={sizeRef}
            onChange={() => dispatch(setSize(sizeRef.current.value))}
            required
          >
            <option value=''>--Choose Size--</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input name="Pepperoni" type="checkbox" checked={state['Pepperoni']}
            onChange={() => dispatch(setToppings('Pepperoni'))}/>
        Pepperoni<br /></label>
        <label>
          <input name="Green Peppers" type="checkbox" checked={state['Green Peppers']}
            onChange={() => dispatch(setToppings('Green Peppers'))}/>
        Green Peppers<br /></label>
        <label>
          <input name="Pineapple" type="checkbox" checked={state['Pineapple']}
            onChange={() => dispatch(setToppings('Pineapple'))}/>
        Pineapple<br /></label>
        <label>
          <input name="Mushrooms" type="checkbox" checked={state['Mushrooms']}
            onChange={() => dispatch(setToppings('Mushrooms'))}/>
        Mushrooms<br /></label>
        <label>
          <input name="Ham" type="checkbox" checked={state['Ham']}
            onChange={() => dispatch(setToppings('Ham'))}/>
        Ham<br /></label>
      </div>
      <input type="submit" />
    </form>
  )
}