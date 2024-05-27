import React from "react";
import Chat from "./chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/conversation";



export default function GeneralApp() {
  return (
    
    <Stack direction='row' sx={{width:"100%"}} >
    
    {/* Chats */}
    <Chat/>

    {/* Conversation */}
    <Box sx={{height:'100%',width:"calc(100vw - 420px)",backgroundColor:'#fff'}}>
    <Conversation/>
    </Box>

    </Stack>
    
  );
}
