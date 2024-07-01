import {
  useTheme,
  Stack,
  Typography,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import { Bell, CaretLeft } from "phosphor-react";
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
        <Stack direction={"row"} alignItems={"center"} pt={2}>
          <IconButton>
            <CaretLeft size={30} />
          </IconButton>
          <Typography variant="h5" fontWeight={550}>
            Settings
          </Typography>
        </Stack>

        {/* User Info */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={3}
          pt={2}
          pl={2}
        >
          <Avatar sx={{ width: 56, height: 56 }} src={faker.image.avatar()} />
          <Stack>
            <Typography variant={"h6"} fontWeight={550}>
              Tanay Shah
            </Typography>
            <Typography variant={"body2"}>
              Who decides what your limit is!!
            </Typography>
          </Stack>
        </Stack>

        <Stack direction={"row"} spacing={4} pt={8}>
          <Bell size={20} />
          <Typography variant={"body1"}>Notifications</Typography>
        </Stack>
        <Divider />
        {/* //////////////////////// */}
        <Stack direction={"row"} spacing={4}>
          <Bell size={20} />
          <Typography variant={"body1"}>Privacy</Typography>
        </Stack>
        <Divider />
        {/* //////////////////////// */}
        <Stack direction={"row"} spacing={4}>
          <Bell size={20} />
          <Typography variant={"body1"}>Security</Typography>
        </Stack>
        <Divider />
        {/* //////////////////////// */}
        <Stack direction={"row"} spacing={4}>
          <Bell size={20} />
          <Typography variant={"body1"}>Theme</Typography>
        </Stack>
        <Divider />
        {/* //////////////////////// */}
        <Stack direction={"row"} spacing={4}>
          <Bell size={20} />
          <Typography variant={"body1"}>Chat Wallpaper</Typography>
        </Stack>
        <Divider />
        {/* //////////////////////// */}
        <Stack direction={"row"} spacing={4}>
          <Bell size={20} />
          <Typography variant={"body1"}>Request Account info</Typography>
        </Stack>
        <Divider />
        {/* //////////////////////// */}
        <Stack direction={"row"} spacing={4}>
          <Bell size={20} />
          <Typography variant={"body1"}>Keyboard shortcuts</Typography>
        </Stack>
        <Divider />
        {/* //////////////////////// */}
        <Stack direction={"row"} spacing={4}>
          <Bell size={20} />
          <Typography variant={"body1"}>Help</Typography>
        </Stack>
        <Divider />
        {/* //////////////////////// */}
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
