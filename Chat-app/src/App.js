import Router from "./Routes";
import { Paper, ThemeProvider,createTheme } from "@mui/material";
const theme=createTheme({
  palette:{
    mode:"dark"
  }
})

function App() {


  return (
    <>
    <ThemeProvider theme={theme}>
    <Paper>
    <Router/>
    </Paper>
    </ThemeProvider>
    </>
  );
}

export default App;
