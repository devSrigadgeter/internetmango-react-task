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
