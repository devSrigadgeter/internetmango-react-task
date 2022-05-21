import React from "react";
import { CircularProgress } from "@mui/material";

const loaderStyles = {
  display: "flex",
  justifyContent: "center",
};

const Loader = () => (
  <div style={loaderStyles}>
    <CircularProgress />
  </div>
);

export default Loader;
