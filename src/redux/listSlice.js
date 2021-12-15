import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {id: Math.random(), name: 'Замена стекла', price:  21000},
    {id: Math.random(), name: 'Замена дисплея', price:  25000},
    {id: Math.random(), name: 'Замена аккумулятора', price:  4000},
    {id: Math.random(), name: 'Замена микрофона', price:  2500},
  ]
}

const listSlice = createSlice({
  name: 'listSlice',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    changeItem(state, action) {
      const editItem = state.items.find(item => item.id === action.payload.id);  
      editItem.name = action.payload.name;
      editItem.price = action.payload.price; 
    }
  }
});

export const listActions = listSlice.actions;
export default listSlice.reducer;