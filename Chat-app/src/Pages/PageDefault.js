import React from "react";
import { Stack, Typography } from "@mui/material";

function PageDefault() {
  return (
    <Stack
      direction={"row"}
      sx={{
        width: "100%",
        border: 9,
        borderColor: "red",
      }}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Typography variant="h2">Default Page</Typography>
    </Stack>
  );
}

export default PageDefault;
