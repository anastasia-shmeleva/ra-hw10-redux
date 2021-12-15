import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: {
    name: '',
    price: ''
  }
}

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    change(state, action) {
      const {type, value} = action.payload;
      state.form[type] = value;
      // state.form = action.payload;
    },
    clearInput(state) {
      state.form.name = '';
      state.form.price = '';
    }
  }
});

export const formActions = formSlice.actions;
export default formSlice.reducer;