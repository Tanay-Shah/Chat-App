import { useTheme, Stack, Typography, IconButton, Avatar } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";

import React from "react";

const Settings = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        height: "100vh",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
      }}
    >
      {/* LEFT */}
      <Stack
        spacing={2}
        sx={{
          width: 302,
          height: "100%",
          pl: 2,
          pr: 2,
        }}
      >
        {/* Header */}
        <Stack direction={"row"} alignItems={"center"} spacing={3} pt={2}>
          <IconButton>
            <CaretLeft size={30} />
          </IconButton>
          <Typography variant="h5" fontWeight={550}>
            Settings
          </Typography>
        </Stack>

        {/* User Info */}
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>

      {/* RIGHT */}
      <Stack
        sx={{
          width: "calc(100vw - 460px)",
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
