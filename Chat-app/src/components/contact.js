import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/features/slices";

const Contact = () => {
  const dispatch = useDispatch();


  ///All the Funtionality Methods 
  const ToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  // get ur state here according to the reducer
  const state = useSelector(state => state.slice1);

  return (
    <Box sx={{ height: "100%", width: 320, border: 1, borderColor: "red" }}>
      <Button sx={{ backgroundColor: "black" }} onClick={() => ToggleSidebar()}>
        CLICK
      </Button>
      {state.sidebar.open.toString()} {state.sidebar.type}
    </Box>
  );
};

export default Contact;
