import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import image from "../../assets/Images/logo.ico";

const MainLayout = () => {
  return (
    <Container sx={{ pt: 5, height: "100vh" }} maxWidth="sm">
      <Stack spacing={5}>
        <Stack
          sx={{ width: "100%" }}
          direction={"column"}
          alignItems={"center"}
        >
          <img style={{ height: 120, width: 120 }} src={image} alt="logo" />
        </Stack>
      </Stack>



    
      <Outlet />
    </Container>
  );
};

export default MainLayout;
