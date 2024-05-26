import React from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  IconButton,
  styled,
  InputBase,
  Divider,
  Button,
  Avatar,
  Badge,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { alpha } from "@mui/material/styles";
import { faker } from "@faker-js/faker";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: -0.5,
      left: -1,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      // animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 50,
        borderRadius: 1,
        boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
        backgroundColor: "#fff",
      }}
      alignContent="center"
      p={2}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar src={faker.image.avatar()} />
          </StyledBadge>

          <Stack direction="column">
            <Typography variant={"subtitle2"} fontWeight={600}>
              Tanay Shah
            </Typography>
            <Typography fontSize={12}>You: thnxx!</Typography>
          </Stack>

        </Stack>
      
      <Stack  direction='column' spacing={1}>
      <Box>{`${new Date().getHours()}:${new Date().getMinutes()}`}</Box>
      

      </Stack>
        
      </Stack>
    </Box>
  );
};

function Chat() {
  return (
    <Paper elevation={2}>
      <Box
        sx={{
          height: "100vh",
          width: 320,
          backgroundColor: "#F8FAFF",
        }}
      >
        <Stack p={3} spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant={"h5"} fontWeight={600}>
              Chats
            </Typography>
            <IconButton>
              <CircleDashed size={32} />
            </IconButton>
          </Stack>

          <Stack>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack alignItems="center" direction={"row"}>
              <ArchiveBox size={16} />
              <Button>
                <Typography fontSize={10} variant="subtitle" fontWeight={600}>
                  Archived
                </Typography>
              </Button>
            </Stack>
            <Divider />
          </Stack>

          <Stack direction="coloumn">
            <ChatElement />
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Chat;
