import React from "react";
import Chatheader from "./chatHeader";
import Chatfooter from "./chatFooter";
import Message, {
  MessageDoc,
  MessageImg,
  MessageLink,
  MessageReply,
} from "./messages";
import { Chat_History } from "../../data/index";
import { Stack, Box, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import { SlimScrollbarStack } from "../search";

export default function Conversation() {
  const theme = useTheme();

  return (
    <Box maxHeight={"100vh"} width={"auto"} flexGrow={1}>
      {/* Chats Header */}
      <Chatheader />

      {/* Msg */}

      <Stack
        sx={{
          height: "calc(100vh - 186px)",
          width: "100%",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <SlimScrollbarStack
          sx={{
            flexGrow: 1,
            overflow: "scroll",
          }}
        >
          <Stack
            direction="column"
            spacing={4}
            pt={1}
            ml={7}
            sx={{
              height: "100%",
              width: "91%",
            }}
          >
            {Chat_History.map((el) => {
              switch (el.type) {
                case "msg":
                  switch (el.subtype) {
                    case "img":
                      return <MessageImg {...el} />;
                    case "doc":
                      return <MessageDoc {...el} />;
                    case "link":
                      return <MessageLink {...el} />;
                    case "reply":
                      return <MessageReply {...el} />;
                    default:
                      return <Message {...el} />; //If none of these that means it is simple message
                  }

                case "divider":
                  return (
                    <Divider orientation={"horizontal"}>{el.text}</Divider>
                  );
                default:
                  return <Box sx={{ backgroundColor: "red" }}>DEFAULT</Box>;
              }
            })}
          </Stack>
        </SlimScrollbarStack>
      </Stack>

      {/* Chats Footer */}

      <Chatfooter />
    </Box>
  );
}
