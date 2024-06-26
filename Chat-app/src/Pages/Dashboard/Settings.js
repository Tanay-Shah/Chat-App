import { useTheme, Stack } from "@mui/material";
import React from "react";

const Settings = () => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        
        height: "calc(100vh - 24px)",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
      }}
    >
      <Stack
        spacing={2}
        sx={{width:'calc(100vw - 110px)',height:'100%',bgcolor:'lightblue' }}
      >

        SETTING
      </Stack>
    </Stack>
  );
};

export default Settings;