// external imports
import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";

// internal imports
import Links from "./FooterConstants";

// assets
import FooterLastCol from "../../assets/FooterLastCol.png";

const styles = {
  box: {
    zIndex: 1,
  },
  divider: {
    mt: 8,
    mb: 8,
  },
  footerCols: {
    display: "flex",
    justifyContent: "space-between",
  },
  footerColumnList: {
    display: "flex",
    flexDirection: "column",
  },
  strongText: {
    fontWeight: "bold",
    pb: 3,
  },
  links: {
    pb: 1,
  },
};

// Footer Column Component
const FooterColumn = ({ title, list }) => (
  <Box sx={styles.footerColumnList}>
    <Typography sx={styles.strongText}>{title}</Typography>
    {list.map((item) => (
      <Typography key={item.label} variant="caption" sx={styles.links}>
        {item.label}
      </Typography>
    ))}
  </Box>
);

// Footer Component
const Footer = () => (
  <Box sx={styles.box}>
    <Divider sx={styles.divider} />
    <Container>
      <Box sx={styles.footerCols}>
        {Links.map((item) => (
          <FooterColumn key={item.title} title={item.title} list={item.list} />
        ))}
        <img src={FooterLastCol} alt="footerLastCol" />
      </Box>
    </Container>
  </Box>
);

export default Footer;
