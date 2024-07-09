import { TextField, Stack, Button, Box } from "@mui/material";
import React from "react";
import AuthSocial from "./AuthSocial";

function SignupForm() {
  return (
    <Box>
      <form>
        <Stack spacing={4}>
          <Stack direction={"row"} spacing={2}>
            <TextField
              label={"FirstName"}
              fullWidth
              variant="outlined"
              color="primary"
            />
            <TextField
              label={"LastName"}
              fullWidth
              variant="outlined"
              color="primary"
            />
          </Stack>
          <TextField label={"Email"} variant="outlined" color="primary" />
          <TextField label={"Password"} variant="outlined" color="primary" />
          <Button type="submit" sx={{ pt: 1.4 }} variant="contained">
            Register
          </Button>
        </Stack>
      </form>
      <AuthSocial />
    </Box>
  );
}

export default SignupForm;
