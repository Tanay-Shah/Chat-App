import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const Contact = () => {
  const open = useSelector(state=>state.slice.open).toString()


  return (
    <Box sx={{ height: "100%", width: 320, backgroundColor: "red" }}>
      {open}
    </Box>
  );
};

export default Contact;
