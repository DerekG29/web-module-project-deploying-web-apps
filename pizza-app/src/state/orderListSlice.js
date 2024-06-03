import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    { fullName: 'Sigourney Weaver', size: 'S', toppings: ['Pepperoni', 'Pineapple'] },
    { fullName: 'Derek Grubbs', size: 'M', toppings: ['Pepperoni', 'Green Peppers', 'Ham'] },
    { fullName: 'Keilah Baldwin', size: 'L', toppings: [] }
  ]
};

const orderListSlice = createSlice({
  name: 'orderList',
  initialState: initialState,
  reducers: {
    addOrder(state, action) {
      state.orders = state.orders.concat(action.payload);
    },
    clearOrders(state) {
      state.orders = [];
    }
  }
})

export default orderListSlice.reducer;

export const {
  addOrder,
  clearOrders,
} = orderListSlice.actions;