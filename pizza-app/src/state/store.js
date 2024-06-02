import { configureStore } from "@reduxjs/toolkit";
import pizzaFormReducer from './pizzaFormSlice';
import sizeFilterReducer from './filterSlice';
import orderListReducer from './orderListSlice';

export const store = configureStore({
  reducer: {
    pizzaForm: pizzaFormReducer,
    sizeFilter: sizeFilterReducer,
    orderList: orderListReducer,
  }
})