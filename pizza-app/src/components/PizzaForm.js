import React from "react";

export default function PizzaForm() {

  return(
    <form>
      <h2>Pizza Form</h2>

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input 
            id="fullname"
            name="fullname"
            placeholder="Type Full Name"
            type="text"
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label>
          <select id="size" name="size">
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input name="1" type="checkbox" />
        Pepperoni<br /></label>
        <label>
          <input name="2" type="checkbox" />
        Green Peppers<br /></label>
        <label>
          <input name="3" type="checkbox" />
        Pineapple<br /></label>
        <label>
          <input name="4" type="checkbox" />
        Mushrooms<br /></label>
        <label>
          <input name="5" type="checkbox" />
        Ham<br /></label>
      </div>
      <input type="submit" />
    </form>
  )
}