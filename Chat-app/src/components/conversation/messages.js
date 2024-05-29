import React from "react";
import { Box, Stack, Card } from "@mui/material";
import {
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

function Message(props) {
  return (
    <Stack alignItems={props.incoming === true ? "start" : "end"} sx={{}}>
      <Box
        p={2}
        sx={{
          backgroundColor: "#0162C4",
          borderRadius: "8px",
          maxWidth: "30%",
          wordWrap: "break-word",
          overflowWrap: "break-word",
        }}
      >
        <Typography> {props.message} </Typography>
      </Box>
    </Stack>
  );
}

const MessageImg = (props) => {
  return (
    <Stack alignItems={props.incoming === true ? "start" : "end"} sx={{}}>
      <Card
        sx={{
          padding: 1,
          maxWidth: 345,
          backgroundColor: "#0162C4",
          borderRadius: "8px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image={props.img}
            alt="IMAGE"
          />
          <CardContent
            sx={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            <Typography>{props.message}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Stack>
  );
};

export { MessageImg };
export default Message;
