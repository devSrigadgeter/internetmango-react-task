// external imports
import React from "react";
import { Box } from "@mui/material";

// internal imports
import Filter from "./Filter";
import FiltersList from "./FiltersList";

// Filters Section
const Filters = () => (
  <Box>
    {FiltersList.map((item) => (
      <Filter key={item.title} data={item} />
    ))}
  </Box>
);

export default Filters;
