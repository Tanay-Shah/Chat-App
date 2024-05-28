import React from "react";
import Chatheader from "./chatHeader";
import Chatfooter from "./chatFooter";
import Message from "./messages";
import { Chat_History } from "../../data/index";
import { Stack, Box } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Conversation() {
  const theme = useTheme();

  return (
    <Box height={"100%"} maxHeight={"100vh"} width={"auto"} flexGrow={1}>
      {/* Chats Header */}
      <Chatheader />

      {/* Msg */}

      <Stack
        position={"relative"}

     
        sx={{
          height: "calc(100vh - 200px)",
          width: "100%",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Stack  direction="column"
        spacing={3}
        ml={7}
        sx={{
          height: "100%",
          width: "91%",
          backgroundColor:'black'
          
        }}>
          {Chat_History.map((el) => {
            return <Message />;
          })}
        </Stack>
      </Stack>

      {/* Chats Footer */}

      <Chatfooter />
    </Box>
  );
}
