import React from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { Link, Smiley, PaperPlaneTilt } from "phosphor-react";
import { useTheme } from "@mui/material";

const StyleField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

function Chatfooter() {
  const theme = useTheme();
  return (
    <Box
    position={"relative"}
      p={2}
      pb={4}
      pl={7}
      sx={{
        width: 'calc(100vw - 420)',
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack direction="row" spacing={2} alignItems={"center"}>
        <StyleField
          placeholder="Write a Message..."
          sx={{width:'92%'}}
          variant="filled"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <Link  color={theme.palette.mode==='light'?'#000':'#fff'} size={28} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley color={theme.palette.mode==='light'?'#000':'#fff'} size={28} />
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
          <IconButton >
            <PaperPlaneTilt color={theme.palette.mode==='light'?'white':'black'} size={30} />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}

export default Chatfooter;
