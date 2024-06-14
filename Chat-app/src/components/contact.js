import React from "react";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme
} from "@mui/material";
import { VideoCamera, Phone, SignOut, CaretRight } from "phosphor-react";
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
      <Stack pl={3} pr={3} sx={{ width: "max-width" }} spacing={2}>
        {/* INFO */}
        <Stack spacing={2} alignItems={"center"} p={2}>
          <Box display={"flex"} alignItems={"center"}>
            <Avatar sx={{ mr: 2, width: 56, height: 56 }} />
            <Typography variant="subtitle1" fontWeight={600}>
              Tanay Shah <br />{" "}
              <Typography variant="subtitle1">+91 835707065</Typography>
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Box>
              <IconButton sx={{ mr: 4 }}>
                <Phone
                  color={theme.palette.mode === "light" ? "#000" : "#fff"}
                  size={32}
                />
              </IconButton>
              <br />
              <Typography variant="subtitle2" fontWeight={600} ml={0.5}>
                Voice
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <VideoCamera
                  color={theme.palette.mode === "light" ? "#000" : "#fff"}
                  size={32}
                />
              </IconButton>
              <br />
              <Typography variant="subtitle2" fontWeight={600}>
                Video
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box>
          <Divider />
        </Box>

        <Box>
          <Typography variant="subtitle1" fontWeight={550}>
            About
          </Typography>
          <Typography variant="subtitle1">
            Imagination is the only limit
          </Typography>
        </Box>

        <Box>
          <Divider />
        </Box>

        <Stack spacing={2}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="subtitle1" fontWeight={550}>
              Media,Links & Docs
            </Typography>
            <Button endIcon={<CaretRight size={20} />}>404</Button>
          </Stack>
          <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
            {/* Mapping over an array to render multiple images */}
            {[1, 2, 3].map(el => {
              // Ensure correct path to the image file
              return (
                <Box height={80} width={80}>
                  {" "}<img
                    key={el}
                    src={faker.image.abstract()}
                    alt="Hey"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                </Box>
              );
            })}
          </Stack>
        </Stack>

        <Box>
          <Divider />
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact;
