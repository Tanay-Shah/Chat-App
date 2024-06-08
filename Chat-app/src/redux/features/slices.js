import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: "contact" // image , link , docs
};

export const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.open = !state.open;
      state.type = action.payload;
    },
  }
})

export const {toggleSidebar} = Slice.actions
export default Slice.reducer