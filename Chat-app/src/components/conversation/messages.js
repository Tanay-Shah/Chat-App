import React from "react";
import { Box, Stack, Card, Link } from "@mui/material";
import {
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { ArrowLineDown, Image } from "phosphor-react";

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
 


// dd
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

const MessageLink = (props) => {
  return (
    <>
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
          <CardMedia
            component="img"
            height="auto"
            image={props.preview}
            alt="IMAGE"
          />

          <Link
            href="https://www.youtube.com/"
            target="_blank"
            underline="hover"
            color="black"
            variant="subtitle1"
          >
            {props.message}
          </Link>
        </Box>
      </Stack>
    </>
  );
};

const MessageReply = (props) => {
  return (
    <Stack alignItems={props.incoming === true ? "start" : "end"}>
      <Typography mr={1} fontSize={12} fontWeight={600} color={"#676767"}>
        Replied
      </Typography>
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
        <Box
          p={2}
          sx={{
            backgroundColor: "violet",
            borderRadius: "4px",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          <Typography> {props.message} </Typography>
        </Box>

        <Typography mt={2}> {props.reply} </Typography>
      </Box>
    </Stack>
  );
};

const MessageDoc = (props) => {
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
        <Stack mb={3} direction={"row"} spacing={2} alignItems={"center"}>
          <Image size={32} />
          <Typography variant={"body2"} noWrap={true}>
            Absgggghhhhhtract.png
          </Typography>
          <ArrowLineDown size={25} />
        </Stack>
        <Typography>{props.message}</Typography>
      </Box>
    </Stack>
  );
};

export { MessageImg, MessageLink, MessageReply, MessageDoc };
export default Message;
