import { Divider, IconButton, Stack } from "@mui/material";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "phosphor-react";
import React from "react";

const social = [
  {
    platform: "Instagram",
    logo: <InstagramLogo size={28} color="black" />,
  },
  {
    platform: "Linkedin",
    logo: <LinkedinLogo size={28} color="black" />,
  },
  {
    platform: "twitter",
    logo: <TwitterLogo size={28} color="black" />,
  },
  {
    platform: "github",
    logo: <GithubLogo size={28} color="black" />,
  },
];

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
      <Stack justifyContent={"center"} spacing={2} direction={"row"}>
        {social.map((el) => {
          return <IconButton>{el.logo}</IconButton>;
        })}
      </Stack>
    </div>
  );
};

export default AuthSocial;
