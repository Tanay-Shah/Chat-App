import React from "react";
import { Box, Button } from "@mui/material";
import { useSelector } from "../redux/store";
import { ToogleSidebar, UpdateSidebar } from "../redux/features/slices";

const Contact = () => {
  const state = useSelector(state => state.slice1);

  return (
    <Box sx={{ height: "100%", width: 320, border: 1, borderColor: "red" }}>
      <Button
        sx={{ backgroundColor: "black" }}
        onClick={() => UpdateSidebar("image")()}
      >
        Type
      </Button>
      {state.sidebar.type}
      <Button
        sx={{ backgroundColor: "black" }}
        onClick={() => ToogleSidebar()()}
      >
        Open
      </Button>
      {state.sidebar.open.toString()}
    </Box>
  );
};

export default Contact;
