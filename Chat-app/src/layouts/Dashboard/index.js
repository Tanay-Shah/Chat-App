import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data/index";
import { GearSix } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { AntSwitch } from "../../components/switch";
import { Contex } from "../../contexs/setting";

export default function DashboardLayout() {
  const { onToggle, themeMode } = useContext(Contex);
  const theme = useTheme();
  const [selected, setState] = useState(0);

  // ///////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="row">
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "95vh", /////DO CHECK 95VH
          width: 100,
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
          sx={{ height: "100%" }}
        >
          <Stack alignItems="center" spacing={4}>
            <Box
              sx={{
                background: "#0162C4",
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

            {themeMode === "light" ? (
              <Stack
                sx={{ width: "max-content" }}
                direction="column"
                spacing={3}
              >
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

                <Divider color="#000" />

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
            ) : (
              <Stack
                sx={{ width: "max-content" }}
                direction="column"
                spacing={3}
              >
                {Nav_Buttons.map((el) => {
                  return el.index === selected ? (
                    <Box
                      key={el.index}
                      sx={{
                        background: "#0162C4",
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton sx={{ color: "#000" }}>{el.icon}</IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      sx={{ color: "#fff" }}
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
                      background: "#0162C4",
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton sx={{ color: "#000" }}>
                      <GearSix />
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      setState(3);
                    }}
                  >
                    <GearSix />
                  </IconButton>
                )}
              </Stack>
            )}
          </Stack>

          <Stack spacing={2} alignItems={"center"}>
            <AntSwitch onClick={onToggle} />
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar src={faker.image.avatar()} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
            
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
}
