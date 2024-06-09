import React from "react";
import { Box, Button } from "@mui/material";
import { useSelector ,useDispatch} from "react-redux";
import {toggleSidebar} from '../redux/features/slices'


const Contact = () => {
  const open = useSelector(state=>state.slice)
  const dispatch=useDispatch();

  function handleToggle(action){
    dispatch(toggleSidebar(action))
  }

  console.log(open);

  return (
    <Box sx={{ height: "100%", width: 320, backgroundColor: "red" }}>
    <Button onClick={()=>handleToggle('IMAGE')}>CLICK ME</Button>
    </Box>
  );
};


export default Contact;
