// external imports
import React from "react";
import {
  Box,
  Container,
  Divider,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

const styles = {
  box1: {
    width: "100%",
    mt: 10,
    backgroundColor: "text.white",
  },
  box2: {
    display: "flex",
    justifyContent: "space-between",
    pt: 2.5,
    pb: 2.5,
  },
  formControl: {
    "& .MuiInput-root:before": {
      borderBottom: "none",
    },
    "& .MuiInput-root:hover:before": {
      borderBottom: "none !important",
    },
  },
  select: {
    width: "max-content",
    fontSize: "13px",
    ml: 1,
    mr: 1,
    "& .MuiInput-input": {
      pb: 0,
    },
  },
  divider: {
    mb: 2,
  },
};

const list = [
  "All Medicines",
  "Covid Test & Prevention",
  "Healthcare Products",
  "Featured",
  "Fitness & Supplements",
  "Diabetes",
  "Personal Care",
];

// Navbar Component
const NavBar = () => (
  <Box sx={styles.box1}>
    <Container>
      <Box sx={styles.box2}>
        {list.map((item) => (
          <FormControl
            key={item}
            variant="standard"
            size="small"
            sx={styles.formControl}
          >
            <Select value={item} sx={styles.select}>
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            </Select>
          </FormControl>
        ))}
      </Box>
    </Container>
    <Divider sx={styles.divider} />
  </Box>
);

export default NavBar;
