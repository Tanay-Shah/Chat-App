import { useTheme, Stack } from "@mui/material";
import React from "react";

const Settings = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      sx={{
        height: "100vh",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
      }}
    >
      <Stack
        sx={{
          width:320,
          height: "100%",
          bgcolor: "lightblue",
        }}
      >
        Left
      </Stack>

      <Stack
        sx={{
          width:'calc(100vh - 320px)',
          height: "100%",
          bgcolor: "lightgreen",
        }}
      >
        Right
      </Stack>
    </Stack>
  );
};

export default Settings;
