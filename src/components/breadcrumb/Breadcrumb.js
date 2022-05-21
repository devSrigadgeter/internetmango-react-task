// external imports
import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const styles = {
  link: {
    display: "flex",
    alignItems: "center",
  },
  homeIcon: {
    mr: 0.5,
  },
};

// Breadcrumb component
const Breadcrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" sx={styles.link} href="/">
        <HomeIcon sx={styles.homeIcon} fontSize="inherit" />
      </Link>
      <Link underline="hover" color="inherit" sx={styles.link} href="#">
        COVID
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
