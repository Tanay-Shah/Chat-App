import { Divider } from "@mui/material";
import React from "react";

const AuthSocial = () => {
  return (
    <div>
      <Divider
        sx={{
          fontWeight: 550,
          my: 2.5,
          color: "text.disabled",
          "&::before,::after": { borderTopStyle: "dashed" },
        }}
      >
        OR
      </Divider>
    </div>
  );
};

export default AuthSocial;
