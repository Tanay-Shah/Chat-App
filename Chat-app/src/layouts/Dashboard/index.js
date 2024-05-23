import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";

export default function DashboardLayout() {
  const theme = useTheme();

  return (
    <>
      <Box p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
      <Stack direction="column" alignItems='center' sx={{width:'100%'}}>
        <Box
          sx={{
            background: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        </Stack>

      </Box>
      <Outlet />
    </>
  );
}
