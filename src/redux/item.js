import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    id: "",
  },
  reducers: {
    setItemId: (state, action) => {
      state.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItemId } = itemSlice.actions;

export const getItemId = (state) => state.item.id;

export default itemSlice.reducer;
