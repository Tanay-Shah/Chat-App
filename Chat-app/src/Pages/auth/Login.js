import { Link, Typography, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/loginForm";

const Login = () => {
  return (
    <Stack mt={9} spacing={2}>
      <Typography variant="h4" fontWeight={550}>
        Login to Tawk
      </Typography>

      <Stack direction={"row"} spacing={1} alignItems={"center"}>
        <Typography variant="body2" fontWeight={550}>
          New User?
        </Typography>

        <Link
          to="/auth/register"
          underline="hover"
          component={RouterLink}
          fontWeight={550}
          variant="subtitle1"
        >
          {" "}
          Create an account
        </Link>
      </Stack>

      {/* Login Form */}
      <LoginForm type={"Login"} />

      {/* Auth Social */}
      <AuthSocial />
    </Stack>
  );
};

export default Login;
