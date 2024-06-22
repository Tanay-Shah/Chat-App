import React from "react";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";
import Contact from "../../components/ContactInfo/contact";
import { useSelector } from "../../redux/store";
import SharedMessages from "../../components/ContactInfo/SharedMesages";

export default function GeneralApp() {
  const appState = useSelector((state) => state.slice1);

  return (
    <Stack direction="row" sx={{ width: "100%", height: "100vh" }}>
      {/* Conversation */}
      <Box
        sx={{
          height: "100%",
          width: appState.sidebar.open
            ? "calc(100vw - 750px)"
            : "calc(100vw - 430px)",
        }}
      >
        <Conversation />
      </Box>

      {/* Contact info */}
      {/* Immediately Invoked Function Expressions (IIFE) */}
      {appState.sidebar.open &&
        (function () {
          switch (appState.sidebar.type) {
            case "contact":
              return <Contact />;
            case "Image":
              return <SharedMessages />;
            case "docs":
              break;
            default:
              break;
          }
        })()}
    </Stack>
  );
}
