import React from "react";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

function Message(props) {
  const theme = useTheme();
  return (
    <Box
      display={"flex"}
      m={7}
      sx={{
        width: 450,
        height: 40,
        backgroundColor: theme.palette.primary.main,
        alignItems: "center",
      }}
    >
      H
    </Box>
  );
}

export default Message;
