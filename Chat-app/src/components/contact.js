import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/features/slices";

const Contact = () => {
  // get ur state here according to the reducer
  const state = useSelector((state) => state.slice1);
  const dispatch = useDispatch();

  function handleToggle(action) {
    dispatch(toggleSidebar({ type: action }));
  }

  return (
    <Box sx={{ height: "100%", width: 320, backgroundColor: "red" }}>
      <Button
        sx={{ backgroundColor: "black" }}
        onClick={() => handleToggle("IMAGE")}
      >
        CLICK
      </Button>
      {state.open.toString()} {state.type}
    </Box>
  );
};

export default Contact;
