import React from "react";
import { Box, Button } from "@mui/material";
import { useSelector ,useDispatch} from "react-redux";
import {toggleSidebar} from '../redux/features/slices'
import {username} from '../var.js'

const Contact = () => {
  // const open = useSelector(state=>state.slice)
  const dispatch=useDispatch();

  console.log(username);


  function handleToggle(action){
    dispatch(toggleSidebar(action))
  }

  return (
    <Box sx={{ height: "100%", width: 320, backgroundColor: "red" }}>
    <Button onClick={()=>handleToggle('IMAGE')}>CLICK ME</Button>
    {username}
    </Box>
  );
};


export default Contact;
