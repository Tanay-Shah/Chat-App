import { createSlice } from "@reduxjs/toolkit";


const initialState = {
sidebar:{
  open: false,
  type: "contact", //DOCS , IMAGE ...
},
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.open=!state.sidebar.open
    },
    updateSidebar:(state,action)=>{
      state.type = action.payload.type;
    }
  },
});

//slice.actions contains all the reducers

export const { toggleSidebar ,updateSidebar} = slice.actions;
export default slice.reducer;
