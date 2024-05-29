import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import { Typography } from "@mui/material";

function Message(props) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        height: 40,
        justifyContent: "center",
        alignItems:'start'
      }}
    >


      <Box p={3} sx={{backgroundColor:'#0162C4' ,maxWidth:'30%',  wordWrap: 'break-word', overflowWrap: 'break-word'}} >
      <Typography > nnnnnnn </Typography>
      </Box>


    </Stack>
  );
}

export default Message;
