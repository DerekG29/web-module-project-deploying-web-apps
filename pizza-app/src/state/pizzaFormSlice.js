import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  size: '',
  'Pepperoni': false,
  'Green Peppers': false,
  'Pineapple': false,
  'Mushrooms': false,
  'Ham': false,
}

const pizzaFormSlice = createSlice({
  name: 'pizzaForm',
  initialState: initialState,
  reducers: {
    setName(state, action) {
      state.fullName = action.payload;
    },
    setSize(state, action) {
      state.size = action.payload;
    },
    setToppings(state, action) {
      state[action.payload] = !state[action.payload];
    },
    resetForm: () => initialState,
  }
})

export default pizzaFormSlice.reducer;

export const {
  setName,
  setSize,
  setToppings,
  resetForm,
} = pizzaFormSlice.actions;