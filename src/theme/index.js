// external imports
import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = ({ children }) => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: "#e69a3a",
          },
          text: {
            primary: "#484848",
            white: "#fff",
            black: "#000",
            gray: "#c0c0c0",
            lightGray: "#c0c0c078",
          },
        },
      })}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default theme;
