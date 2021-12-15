import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import formSlice from "./formSlice";
import filterSlice from "./filterSlice";

export default configureStore({
  reducer: {
    listSlice,
    formSlice,
    filterSlice
  }
})