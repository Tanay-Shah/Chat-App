import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "contact", //DOCS , IMAGE ...
  },
  settingbar: {
    open: false,
  },
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebar: (state, action) => {
      state.sidebar.type = action.payload.type;
    },
    updateSettingbar: (state, action) => {
      state.settingbar.open = !state.settingbar.open;
    },
  },
});

//slice.actions contains all the reducers
export const { toggleSidebar, updateSidebar } = slice.actions;

//All the Funtionality Methods
export function ToogleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSettingbar() {
  return async () => {
    dispatch(slice.actions.updateSettingbar());
  };
}

export function UpdateSidebar(type) {
  return async () => {
    dispatch(
      slice.actions.updateSidebar({
        type,
      })
    );
  };
}

export default slice.reducer;
