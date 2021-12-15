import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: ''
}

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    change(state, action) {
      state.filter = action.payload;
    }
  }
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;