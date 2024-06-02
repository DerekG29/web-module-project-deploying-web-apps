import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    { fullName: 'Sigourney Weaver', size: 'S', toppings: ['Pepperoni', 'Pineapple'] },
  ]
};

const orderListSlice = createSlice({
  name: 'orderList',
  initialState: initialState,
  reducers: {
    addOrder(state, action) {
      state = { orders: state.orders.push(action.payload) };
    },
  }
})

export default orderListSlice.reducer;

export const {
  addOrder,
  clearOrders,
} = orderListSlice.actions;