// external imports
import React from "react";
import { Box, Pagination } from "@mui/material";

const styles = {
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

// Pagination Component
const CustomPagination = ({ pageCount, sendPage }) => {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    sendPage(value);
  };

  return (
    <Box sx={styles.box}>
      Page
      <Pagination
        page={page}
        shape="rounded"
        count={pageCount}
        onChange={handleChange}
      />
    </Box>
  );
};

export default CustomPagination;
