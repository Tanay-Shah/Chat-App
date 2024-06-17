import { useTheme } from "@mui/material";
import React from "react";
import { Stack, Typography, IconButton, Box } from "@mui/material";
import { UpdateSidebar } from "../../redux/features/slices";
import { CaretLeft } from "phosphor-react";

function SharedImage() {
  const theme = useTheme();

  return (
    <Box sx={{ height: "100%", width: 320 }}>
      <Stack
        pl={3}
        pr={3}
        sx={{
          width: "max-width",
          height: 90,
          boxShadow: "0px 0.3px 8px rgba(0, 0, 0, 0.3)"
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
    </Box>
  );
}

export default SharedImage;
