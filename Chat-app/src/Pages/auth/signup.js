import React from 'react'
import SignupForm from '../../sections/auth/signupForm'
import { Stack,Typography,Link } from '@mui/material'
import { Link as RouterLink } from "react-router-dom";

function Signup() {
  return (
    <Stack mt={9} spacing={2}>
     <Typography variant="h4" fontWeight={550}>
        Login to Tawk
      </Typography>

      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Typography variant="body2" fontWeight={550}>
          Already have an account?
        </Typography>

        <Link
          to="/auth/login"
          underline="hover"
          component={RouterLink}
          fontWeight={550}
          variant="subtitle1"
        >
          {" "}
          Sign in
        </Link>
      </Stack>
      <SignupForm/>
    </Stack>
  )
}

export default Signup