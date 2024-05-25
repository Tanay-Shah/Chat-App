import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data/index";
import { GearSix } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Switch,styled } from '@mui/material';


export default function DashboardLayout() {
  const theme = useTheme();
  const [selected, setState] = useState(0);

  console.log(theme);

  
 const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 16,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(18px)',
    },
  }, 
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(19px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "95vh",                                                                     /////DO CHECK VH
          width: 100,
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent='space-between'
          spacing={3}
          sx={{ height: "100%" }}
        >
          <Stack alignItems='center' spacing={4}>
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

            <Stack sx={{ width: "max-content" }} direction="column" spacing={3}>
              {Nav_Buttons.map((el) => {
                return el.index === selected ? (
                  <Box
                    key={el.index}
                    sx={{
                      background: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ color: "#fff" }}>{el.icon}</IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{ color: "#000" }}
                    onClick={() => {
                      setState(el.index);
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                );
              })}

              <Divider />

              {selected === 3 ? (
                <Box
                  sx={{
                    background: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ color: "#fff" }}>
                    <GearSix />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{ color: "#000" }}
                  onClick={() => {
                    setState(3);
                  }}
                >
                  <GearSix />
                </IconButton>
              )}
            </Stack>
          </Stack>


          <Stack spacing={4} alignItems={"center"}>
              <AntSwitch />
            <Avatar src={faker.image.avatar()} />
          </Stack>


        </Stack>
      </Box>
      <Outlet />
    </>
  );
}
