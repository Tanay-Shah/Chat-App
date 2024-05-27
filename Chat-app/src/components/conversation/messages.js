import React from 'react'
import { Stack } from '@mui/material'
import { useTheme } from '@emotion/react'

function Message() {
  const theme=useTheme()
  return (
    <Stack
    position={'relative'}
    direction={"row"}
    sx={{
      height: "calc(100vh - 200px)",
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
    }}
  >

      Message 


  </Stack>
  )
}

export default Message