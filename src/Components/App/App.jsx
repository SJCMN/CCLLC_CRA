import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import StickyFooter from "../StickyFooter/StickyFooter";
import AppHeader from "../AppHeader/AppHeader";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  pallet: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

function App() {
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppHeader />
          <StickyFooter />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
