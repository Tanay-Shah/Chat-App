import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { VideoCamera, Phone, SignOut } from "phosphor-react";
import { ToogleSidebar } from "../redux/features/slices";

const Contact = () => {
  const theme = useTheme();
  return (
    <Box sx={{ height: "100%", width: 320, border: 1, borderColor: "red" }}>
      {/* Header */}
      <Stack
        sx={{ width: "max-width", height: 100 }}
        direction={"row"}
        spacing={3}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h6" fontWeight={550}>
          Contact Info
        </Typography>
        <IconButton onClick={ToogleSidebar()}>
          <SignOut
            color={theme.palette.mode === "light" ? "#000" : "#fff"}
            size={30}
          />
        </IconButton>
      </Stack>

      {/* Details */}
      <Stack sx={{ width: "max-width" }}>
        {/* INFO */}
        <Stack spacing={3} alignItems={"center"} p={2}>
          <Box display={"flex"} alignItems={"center"}>
            <Avatar sx={{ mr: 2, width: 56, height: 56 }} />
            <Typography variant="subtitle1" fontWeight={600}>
              Tanay Shah <br />{" "}
              <Typography variant="subtitle1">+91 835707065</Typography>
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 4 }}>
              <Phone
                color={theme.palette.mode === "light" ? "#000" : "#fff"}
                size={32}
              />
            </IconButton>
            <IconButton>
              <VideoCamera
                color={theme.palette.mode === "light" ? "#000" : "#fff"}
                size={32}
              />
            </IconButton>
          </Box>
        </Stack>
        <Divider />
      </Stack>
    </Box>
  );
};

export default Contact
