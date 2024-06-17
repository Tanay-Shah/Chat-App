import React from "react";
import Chat from "./chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/ContactInfo/contact";
import { useSelector } from "../../redux/store";
import SharedImage from "../../components/ContactInfo/SharedImage";

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
      {appState.sidebar.open &&
        (function() {
          switch (appState.sidebar.type) {
            case "contact":
              return <Contact />;
            case "Image":
              return <SharedImage />;
            case "docs":
              break;
            default:
              break;
          }
        })()}


        
    </Stack>
  );
}
