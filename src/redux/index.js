import { configureStore } from "@reduxjs/toolkit";
import item from "./item";

export default configureStore({
  reducer: {
    item,
  },
});
