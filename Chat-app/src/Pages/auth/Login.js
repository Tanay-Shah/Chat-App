import { Link, Typography, Stack } from "@mui/material";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {register,handleSubmit}=useForm()

  const form_submit = () => {
    setTimeout(() => {
      navigate("/");
      alert("Form Submited");
    }, 2000);
  };

  return (
    <Stack mt={4} spacing={2}>
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
      <form onSubmit={handleSubmit(form_submit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
      </form>

      {/* Auth Social */}
      <AuthSocial />
    </Stack>
  );
};

export default Login;
