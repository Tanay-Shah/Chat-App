import React, { useState } from "react";
import {
  Box,
  Paper,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { Link, Smiley, PaperPlaneTilt } from "phosphor-react";
import { useTheme } from "@mui/material";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const StyleField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

function Chatfooter() {
  const theme = useTheme();
  const [emojiOpen, emojiStatus] = useState(false);

  return (
    <Box
      position={"relative"}
      p={2}
      pb={4}
      pl={7}
      sx={{
        width: "calc(100vw - 420)",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <StyleField
          placeholder="Write a Message..."
          sx={{ width: "92%" }}
          variant="filled"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <Link
                    color={theme.palette.mode === "light" ? "#000" : "#fff"}
                    size={28}
                  />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <Stack position={"relative"} display={emojiOpen ? "inline-block" : "none"} sx={{bottom:250,left:150}}>
                <Paper elevation={0}>
                <Picker data={data} onEmojiSelect={console.log} theme={theme.palette.mode}/>
                </Paper>
                </Stack>
                <IconButton onClick={() => emojiStatus((prev) => !prev)}>
                  <Smiley
                    color={theme.palette.mode === "light" ? "#000" : "#fff"}
                    size={28}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box
          sx={{
            height: 48,
            width: 48,
            borderRadius: "20%",
            backgroundColor: "#0162C4",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <IconButton>
            <PaperPlaneTilt
              color={theme.palette.mode === "light" ? "white" : "black"}
              size={30}
            />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}

export default Chatfooter;
