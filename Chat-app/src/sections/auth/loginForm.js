import { useForm } from "react-hook-form";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack, TextField } from "@mui/material";

function LoginForm() {
  const navigate = useNavigate();

  // React Form Hook
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const form_submit = (data) => {
    setTimeout(() => {
      navigate("/");
      alert(JSON.stringify(data));
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(form_submit)}>
      <Stack spacing={3}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          {...register("Name", { required: true })}
          aria-invalid={errors.Name ? "true" : "false"}
        />
        {errors.Name?.type === "required" && (
          <p role="alert">First name is required</p>
        )}

        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          {...register("Password", { required: true })}
          aria-invalid={errors.Password ? "true" : "false"}
        />
        {errors.Password?.type === "required" && (
          <p role="alert">Password is required</p>
        )}

        <Button type={"submit"} variant="contained" sx={{ pt: 1 }}>
          Login
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
