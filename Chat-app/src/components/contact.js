import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/features/slices";

const Contact = () => {
  // get ur state here according to the reducer
  const state = useSelector((state) => state.slice1);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(toggleSidebar());
  }

  return (
    <Box sx={{ height: "100%", width: 320, backgroundColor: "red" }}>
      <Button
        sx={{ backgroundColor: "black" }}
        onClick={() => handleToggle()}
      >
        CLICK
      </Button>
      {state.sidebar.open.toString()} {state.sidebar.type}
    </Box>
  );
};

export default Contact;
