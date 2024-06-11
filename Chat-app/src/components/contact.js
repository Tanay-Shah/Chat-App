import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/features/slices";

const Contact = () => { 
  // const state = useSelector((state) => state.app);
  const dispatch = useDispatch();

 
  function handleToggle(action) {
    dispatch(toggleSidebar({type:action}));
  }

  return (
    <Box sx={{ height: "100%", width: 320, backgroundColor: "red" }}>
      <Button onClick={() => handleToggle("IMAGE")}>CLICK ME</Button>
    </Box>
  );
};

export default Contact;
