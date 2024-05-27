import React from "react";
import Chat from "./chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";



export default function GeneralApp() {
  return (
    
    <Stack direction='row'>
    <Chat/>
    <Box sx={{height:'100%',width:"100vw",backgroundColor:'black'}}>
    <Conversation/>
    </Box>
    </Stack>
    
  );
}
