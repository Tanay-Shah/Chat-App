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
import { alpha, useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";


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

const ChatElement = (props) => {
  const theme=useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        height: 50,
        borderRadius: 1,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.palette.mode==='light'?"#fff":theme.palette.background.paper,
      }}
      alignContent="center"
      p={2}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          {props.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={props.img} />
            </StyledBadge>
          ) : (
            <Avatar src={props.img} />
          )}

          <Stack direction="column">
            <Typography variant={"subtitle2"} fontWeight={600}>
              {props.name}
            </Typography>
            <Typography fontSize={12}>{props.msg}</Typography>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: "600" }} variant="caption">
            {props.time}
          </Typography>
          <Badge color='primary' badgeContent={props.unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};


const SlimScrollbarStack = styled(Stack)({
  /* Styling the scrollbar for WebKit-based browsers */
  '&::-webkit-scrollbar': {
    width: '0px', /* Adjust the width to make it slimmer */
  }
});



function Chat() {
  const theme=useTheme();
  return (
    <Paper elevation={2}>
      <Box
        sx={{
          position: "relative",
          width: 320,
          backgroundColor: theme.palette.mode==='light'?"#F8FAFF":theme.palette.background.paper,
        }}
      >
        <Stack p={3} spacing={2} sx={{ height: "92vh" }}>
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
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
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

          <SlimScrollbarStack sx={{flexGrow:1,height: "100%", overflow:'scroll', overflowX: 'hidden'  }}>
          <Stack >
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

export default Chat;
