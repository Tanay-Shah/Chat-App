import React from "react";
import Chat from "./chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";

export default function GeneralApp() {
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Chats */}
      <Stack maxWidth={320}>
      <Chat />
      </Stack>

      {/* Conversation */}
      <Box sx={{ height: "100%", width: "calc(100vw - 420px)" }}>
        <Conversation />
      </Box>
    </Stack>
  );
}
