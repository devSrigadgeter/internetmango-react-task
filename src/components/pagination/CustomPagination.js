// external imports
import React from "react";
import { Box, Pagination } from "@mui/material";

const styles = {
  box: {
    display: "flex",
    color: "text.black",
    alignItems: "center",
    justifyContent: "center",
  },
};

// Pagination Component
const CustomPagination = ({ pageCount }) => {
  return (
    <Box sx={styles.box}>
      Page
      <Pagination count={pageCount} shape="rounded" />
    </Box>
  );
};

export default CustomPagination;
