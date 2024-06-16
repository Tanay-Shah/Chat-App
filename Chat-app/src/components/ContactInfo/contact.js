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
  useTheme,
} from "@mui/material";
import {
  VideoCamera,
  Phone,
  CaretRight,
  Star,
  Bell,
  Prohibit,
  Trash,
  X,
} from "phosphor-react";
import { ToogleSidebar } from "../../redux/features/slices";
import { AntSwitch } from "../switch";
import { useSelector } from "../../redux/store";

const Contact = () => {
  const Appstate=useSelector(state=>state.slice1)
  const theme = useTheme();

  console.log(Appstate);
  return (
    <Box sx={{ height: "100%", width: 320 }}>


      {/* Header */}
      <Stack
        pl={3}
        pr={3}
        sx={{
          width: "max-width",
          height: 90,
          boxShadow: "0px 0.3px 8px rgba(0, 0, 0, 0.3)",
        }}
        direction={"row"}
        spacing={3}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="subtitle1" fontWeight={550}>
          Contact Info
        </Typography>
        <IconButton onClick={ToogleSidebar()}>
          <X
            color={theme.palette.mode === "light" ? "#000" : "#fff"}
            size={25}
          />
        </IconButton>
      </Stack>


      {/* Details */}
      
      <Stack pt={2} pl={3} pr={3} sx={{ width: "max-width" }} spacing={2}>
        {/* INFO */}
        <Stack spacing={2} alignItems={"center"} p={2}>
          <Box display={"flex"} alignItems={"center"}>
            <Avatar
              sx={{ mr: 2, width: 56, height: 56 }}
              src={faker.image.avatar()}
            />
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
            {[1, 2, 3].map((el) => {
              // Ensure correct path to the image file
              return (
                <Box height={80} width={80}>
                  {" "}
                  <img
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
        {/* Started */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Star size={20} />
            <Typography variant="subtitle1" fontWeight={550}>
              Starred Messages
            </Typography>
          </Stack>
          <CaretRight size={20} />
        </Stack>

        <Box>
          <Divider />
        </Box>

        {/* mute message */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Bell size={20} />
            <Typography variant="subtitle1" fontWeight={550}>
              Mute Notifications
            </Typography>
          </Stack>
          <AntSwitch />
        </Stack>

        <Box>
          <Divider />
        </Box>
        {/* Muutual group */}

        <Stack spacing={2}>
          <Typography variant="article">1 group in common</Typography>
          <Box display={"flex"} alignItems={"center"}>
            <Avatar
              sx={{ mr: 2, width: 46, height: 46 }}
              src={faker.image.avatar()}
            />
            <Typography variant="subtitle1" fontWeight={600}>
              Coding Monk <br />{" "}
              <Typography variant="subtitle1">
                Owl, Parrot, Rabbit, You
              </Typography>
            </Typography>
          </Box>

          <Stack direction={"row"} justifyContent={"space-evenly"}>
            <Button
              variant="outlined"
              sx={{ borderRadius: 2 }}
              startIcon={<Prohibit size={20} />}
            >
              {" "}
              <Typography variant="body" fontWeight={550}>
                Block
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{ borderRadius: 2 }}
              startIcon={<Trash size={20} />}
            >
              <Typography variant="body" fontWeight={550}>
                Delete
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>


    </Box>
  );
};

export default Contact;
