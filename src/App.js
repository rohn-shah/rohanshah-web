import React, { useEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import UserProvider from "./store/User";
import Home from "./pages/Home/Home";

import "./App.css";
import { CssBaseline } from "@material-ui/core";

function App() {
  console.log("Testong branch");
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)").matches; // System's theme

  // Darkmode and theme modification
  const [darkState, setDarkState] = useState(darkThemeMq);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = "#316dca";
  const mainSecondaryColor = "#f9826c";
  const backgroundColor = darkState ? "#23272F" : "#FEFFFE";
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      type: palletType,
      background: {
        default: backgroundColor,
      },
      primary: {
        main: mainPrimaryColor,
        contrastText: "#FFF",
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  // Sync theme with System
  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addListener((e) => setDarkState(e.matches));
    return () => darkThemeMq.removeListener((e) => setDarkState(e.matches));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <div className="app">
          <CssBaseline />
          <Home
            darkState={darkState}
            toggleDarkMode={() => setDarkState(!darkState)}
          />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
