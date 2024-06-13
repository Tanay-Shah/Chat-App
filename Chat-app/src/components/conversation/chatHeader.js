import React from "react";
import { faker } from "@faker-js/faker";
import { StyledBadge } from "../search";
import {
  Avatar,
  Stack,
  Typography,
  Box,
  Divider,
  IconButton
} from "@mui/material";
import { MagnifyingGlass, Phone, VideoCamera, CaretDown } from "phosphor-react";
import { useTheme } from "@mui/material";
import { ToogleSidebar } from "../../redux/features/slices";

const Chatheader = () => {
  const theme = useTheme();
  return (
    <Stack
      position={"relative"}
      direction={"row"}
      sx={{
        height: 100,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        justifyContent: "space-between",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Stack
        sx={{ cursor: "pointer" }}
        onClick={ToogleSidebar()}
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        p={6}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar src={faker.image.avatar()} />
        </StyledBadge>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {faker.name.fullName()}
          </Typography>
          <Typography variant="caption">Online</Typography>
        </Box>
      </Stack>
      <Stack p={6} sx={{ justifyContent: "center" }}>
        <Stack direction={"row"} spacing={4}>
          <IconButton>
            <VideoCamera
              color={theme.palette.mode === "light" ? "#000" : "#fff"}
              size={32}
            />
          </IconButton>
          <IconButton>
            <MagnifyingGlass
              color={theme.palette.mode === "light" ? "#000" : "#fff"}
              size={32}
            />
          </IconButton>
          <IconButton>
            <Phone
              color={theme.palette.mode === "light" ? "#000" : "#fff"}
              size={32}
            />
          </IconButton>
          <Divider
            color={theme.palette.mode === "light" ? "#000" : "#fff"}
            orientation="vertical"
          />
          <IconButton>
            <CaretDown
              color={theme.palette.mode === "light" ? "#000" : "#fff"}
              size={32}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Chatheader;
