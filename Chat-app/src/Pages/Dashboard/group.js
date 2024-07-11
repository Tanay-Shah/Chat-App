import React from "react";
import Conversation from "../../components/conversation";
import {
  Box,
  Paper,
  Typography,
  Stack,
  IconButton,
  styled,
  Divider,
} from "@mui/material";
import { MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import { ChatElement } from "./chat";
import { ChatList } from "../../data";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/search";
import { lightBlue } from "@mui/material/colors";

const SlimScrollbarStack = styled(Stack)({
  /* Styling the scrollbar for WebKit-based browsers */
  "&::-webkit-scrollbar": {
    width: "0px" /* Adjust the width to make it slimmer */,
  },
});

function Group() {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ width: "100vw", height: "100vh" }}>
      <Stack
        sx={{
          height: "100%",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <GroupChats />
      </Stack>
      <Stack sx={{ height: "100%", width: "calc(100vw - 430px)" }}>
        <Conversation />
      </Stack>
    </Stack>
  );
}

function GroupChats() {
  const theme = useTheme();
  return (
    <Paper elevation={2}>
      <Box
        sx={{
          position: "relative",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.paper,
        }}
      >
        <Stack
          pl={3}
          pr={3}
          pt={3}
          spacing={2}
          sx={{ height: "calc(100vh - 24px)" }}
        >
          <Stack pt={1} direction="row" alignItems="center">
            <Typography variant={"h5"} fontWeight={550}>
              Groups
            </Typography>
          </Stack>

          <Stack>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709CE6" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack spacing={1}>
            <Stack
              alignItems="center"
              justifyContent={"space-between"}
              direction={"row"}
            >
              <Typography variant="body2" color={lightBlue[200]}>
                Create New Group
              </Typography>

              <IconButton>
                <Plus size={20} color={lightBlue[200]} />
              </IconButton>
            </Stack>
            <Divider />
          </Stack>

          <SlimScrollbarStack
            sx={{
              flexGrow: 1,
              height: "100%",
              overflow: "scroll",
            }}
          >
            <Stack>
              <Stack spacing={2} alignItems={"center"}>
                <Typography fontSize={12} fontWeight={600} color={"#676767"}>
                  Pinned
                </Typography>
                {ChatList.filter((el) => {
                  return el.pinned === true;
                }).map((el) => {
                  return <ChatElement key={el.id} {...el} />;
                })}

                <Typography fontSize={12} fontWeight={600} color={"#676767"}>
                  All Chats
                </Typography>
                {ChatList.filter((el) => {
                  return el.pinned !== true;
                }).map((el) => {
                  return <ChatElement key={el.id} {...el} />;
                })}
              </Stack>
            </Stack>
          </SlimScrollbarStack>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Group;
