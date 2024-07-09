import { TextField, Stack, Button, Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import AuthSocial from "./AuthSocial";
import { Eye, EyeSlash } from "phosphor-react";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm } from "react-hook-form";

function SignupForm() {
  const [eye, seteye] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const register_form = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(register_form)}>
        <Stack spacing={4}>
          <Stack direction={"row"} spacing={2}>
            <TextField
              label={"FirstName"}
              fullWidth
              variant="outlined"
              color={
                errors.FirstName?.type === "required" ? "error" : "primary"
              }
              {...register("FirstName", { required: true })}
            />

            <TextField
              label={"LastName"}
              fullWidth
              variant="outlined"
              color={errors.LastName?.type === "required" ? "error" : "primary"}
              {...register("LastName", { required: true })}
            />
          </Stack>
          <TextField
            label={"Email"}
            variant="outlined"
            type="email"
            color={errors.Email?.type === "required" ? "error" : "primary"}
            {...register("Email", { required: true })}
          />
          <TextField
            label={"Password"}
            variant="outlined"
            color={errors.Password?.type === "required" ? "error" : "primary"}
            {...register("Password", { required: true })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => seteye((prev) => !prev)}>
                    {eye ? <Eye size={28} /> : <EyeSlash size={28} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

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
