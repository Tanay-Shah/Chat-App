import { useTheme, Tabs, Tab, Grid } from "@mui/material";
import React from "react";
import {
  Stack,
  Typography,
  IconButton,
  Box,
  CardMedia,
  Link,
} from "@mui/material";
import { UpdateSidebar } from "../../redux/features/slices";
import { CaretLeft, Image, ArrowLineDown } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Shared_docs, Shared_links } from "../../data";
import { SlimScrollbarStack } from "../search";

function SharedMessages() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: "100vh", width: 320 }}>
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
            return <SharedImages />;
          case 1:
            return <SharedLinks />;
          case 2:
            return <SharedDocs />;

          default:
            break;
        }
      })()}
    </Box>
  );
}

function SharedImages() {
  return (
    <Grid container spacing={2} p={4}>
      {[0, 1, 2, 3, 4, 5, 6].map((el) => {
        return (
          <Grid key={el} item xl={4}>
            <CardMedia
              component="img"
              height="auto"
              image={faker.image.food()}
              alt="IMAGE"
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

function SharedLinks() {
  return (
    <Stack spacing={2} p={4}>
      {Shared_links.map((el) => {
        return (
          <Box maxWidth="100%">
            <Link
              href={el.message}
              target="_blank"
              underline="hover"
              color="blue"
              variant="subtitle1"
            >
              {el.message}
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
}

function SharedDocs() {
  return (
    <SlimScrollbarStack
      sx={{
        height: "calc(100vh - 138px)",
        overflow: "scroll",
      }}
    >
      <Stack spacing={2} pl={2} pr={2} mt={2}>
        {Shared_docs.map((el) => {
          return (
            <Stack alignItems={el.incoming === true ? "start" : "end"} sx={{}}>
              <Box
                p={1}
                sx={{
                  backgroundColor: "#0162C4",
                  borderRadius: "8px",
                  maxWidth: "80%",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                <Stack
                  mb={3}
                  direction={"row"}
                  spacing={1}
                  alignItems={"center"}
                >
                  <Image size={28} />
                  <Typography variant={"body2"} noWrap={true}>
                    Absgggghhhhhtract.png
                  </Typography>
                  <ArrowLineDown size={25} />
                </Stack>
                <Typography>{el.message}</Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </SlimScrollbarStack>
  );
}

export default SharedMessages;
