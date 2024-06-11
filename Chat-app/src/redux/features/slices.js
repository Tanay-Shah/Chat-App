import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  type: "contact", //DOCS , IMAGE ...
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state, action) => {
      state.open = !state.open
      state.type = action.payload.type
    },
  },
});


//slice.actions contains all the reducers

export const { toggleSidebar } = slice.actions;
export default slice.reducer;
