import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import InputAdornment from "@mui/material/InputAdornment";

function LoginForm({ type }) {
  const [eye, seteye] = useState(true);
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
          type="email"
          id="outlined-basic"
          label="email"
          variant="outlined"
          {...register("Name", { required: true })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === "required" && (
          <p role="alert">First name is required</p>
        )}

        <TextField
          type={eye ? "password" : "text"}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          {...register("Password", { required: true })}
          aria-invalid={errors.Password ? "true" : "false"}
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
        {errors.Password?.type === "required" && (
          <p role="alert">Password is required</p>
        )}

        <Button type={"submit"} variant="contained" sx={{ pt: 1 }}>
          {type}
        </Button>
      </Stack>
    </form>
  );
}

export default LoginForm;
