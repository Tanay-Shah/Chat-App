import { Box } from "@mui/material";
import React from "react";
import Chatheader from "./chatHeader";
import Chatfooter from "./chatFooter";
import Message from "./messages";

export default function Conversation() {
  return (
    <Box height={"100%"} maxHeight={"100vh"} width={"auto"} flexGrow={1}>
      {/* Chats Header */}
      <Chatheader />

      {/* Msg */}
      <Message />

      {/* Chats Footer */}

      <Chatfooter />
    </Box>
  );
}
