import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'sizeFilter',
  initialState: { size: 'All' },
  reducers: {
    setSizeFilter(state, action) {
      state.size = action.payload;
    }
  }
})

export default filterSlice.reducer;

export const {
  setSizeFilter
} = filterSlice.actions;