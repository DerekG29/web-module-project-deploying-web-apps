import React from "react";
import OrderList from "./OrderList";
import PizzaForm from "./PizzaForm";

export default function App() {

  return(
      <div id="app">
        <PizzaForm />
        <OrderList />
      </div>
  )
}