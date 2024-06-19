import { useTheme, Tabs, Tab } from "@mui/material";
import React from "react";
import { Stack, Typography, IconButton, Box } from "@mui/material";
import { UpdateSidebar } from "../../redux/features/slices";
import { CaretLeft } from "phosphor-react";

function SharedImage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: "100%", width: 320 }}>
      {/* HEADER */}
      <Stack
        pl={3}
        pr={3}
        sx={{
          width: "max-width",
          height: 90,
          boxShadow: "0px 0.3px 8px rgba(0, 0, 0, 0.3)",
        }}
        direction={"row"}
        spacing={3}
        alignItems={"center"}
      >
        <IconButton onClick={UpdateSidebar("contact")}>
          <CaretLeft
            color={theme.palette.mode === "light" ? "#000" : "#fff"}
            size={25}
          />
        </IconButton>
        <Typography variant="subtitle1" fontWeight={550}>
          Shared Messages
        </Typography>
      </Stack>

      {/* /////////////////////// */}
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Images" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
      </Box>

      {/* Immediately Inkvoke Funtion Expression */}
      {(() => {
        switch (value) {
          case 0:
            return "Image";
          case 1:
            return "Links";
          case 2:
            return "Docs";

          default:
            break;
        }
      })()}
    </Box>
  );
}

export default SharedImage;
