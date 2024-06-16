import React from "react";
import Chat from "./chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/ContactInfo/contact";
import { useSelector } from "../../redux/store";

export default function GeneralApp() {
  const appState = useSelector(state => state.slice1);
 

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chats */}
      <Stack maxWidth={320}>
        <Chat />
      </Stack>

      {/* Conversation */}
      <Box
        sx={{
          height: "100%",
          width: appState.sidebar.open
            ? "calc(100vw - 750px)"
            : "calc(100vw - 430px)"
        }}
      >
        <Conversation />
      </Box>

      {/* Contact info */}
      {appState.sidebar.open ? <Contact /> : ""}
    </Stack>
  );
}
