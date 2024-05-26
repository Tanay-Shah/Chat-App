import { createContext, useState } from "react";
import { defaultSettings } from "../config";
import { ThemeProvider, createTheme } from "@mui/material";
import { Paper } from "@mui/material";


///Creating ContexApi
export const Contex = createContext();


///Setup For Using Contex API
export default function Setting({ children }) {
  const [setting, setSetting] = useState({ ...defaultSettings });

  //For Dark Mode
  const onToggle = () => {
    const mode = setting.themeMode === 'light' ? "dark" : "light";
    setSetting({...setting,themeMode:mode});
  };

  //Changing Theme For Dark Mode
  const theme = createTheme({
    palette: {
      mode: setting.themeMode,
    },
  });


  const value = {
    ...setting,
    setSetting,
    onToggle,
  };

  return (
    <Contex.Provider value={value}>
    {/* Providing theme For Wrapper Component For Dark Mode */}
      <ThemeProvider theme={theme}>
        <Paper elevation={1}>{children}</Paper>
      </ThemeProvider>
    </Contex.Provider>
  );
}
