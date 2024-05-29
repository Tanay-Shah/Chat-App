import React from "react";
import Chatheader from "./chatHeader";
import Chatfooter from "./chatFooter";
import Message, { MessageImg,MessageLink } from "./messages";
import { Chat_History } from "../../data/index";
import { Stack, Box, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import { SlimScrollbarStack } from "../search";

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
        <SlimScrollbarStack
          sx={{
            flexGrow: 1,
            height: "100%",
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
                      return <>Document</>;
                    case "link":
                      return <MessageLink {...el}/>;
                    case "reply":
                      return <>Reply</>;
                    default:
                      return <Message {...el} />;
                  }

                case "divider":
                  return (
                    <Divider orientation={"horizontal"}>{el.text}</Divider>
                  );
                default:
                  return <>Default</>;
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
