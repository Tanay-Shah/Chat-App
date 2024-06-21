import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Message_options } from "../../data";
import { Box, Stack, Card, Link, IconButton } from "@mui/material";
import {
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { ArrowLineDown, Image, DotsThreeVertical } from "phosphor-react";

function ThreeDots() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ position: "relative", right: 15, bottom: 17 }}
      >
        <DotsThreeVertical color="black" size={27} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Message_options.map((el) => (
          <MenuItem onClick={handleClose}>{el.title}</MenuItem>
        ))}
      </Menu>
    </>
  );
}

function Message(props) {
  return (
    <Stack
      direction={"row"}
      justifyContent={props.incoming === true ? "start" : "end"}
    >
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
      <ThreeDots />
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
