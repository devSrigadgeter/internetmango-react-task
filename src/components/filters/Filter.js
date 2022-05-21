// external imports
import React, { useState } from "react";
import { Box, Collapse, IconButton, Typography } from "@mui/material";

// internal imports
import RangeFilter from "./RangeFilter";
import CheckboxFilter from "./CheckboxFilter";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const styles = {
  box: {
    p: 1,
    mb: 3.5,
    width: "300px",
    border: (theme) => `1px solid ${theme.palette.text.primary}33`,
  },
  box2: {
    pl: 2,
    pr: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  typography: {
    fontWeight: "bold",
  },
};

// Filter Picker Function
const filterPicker = (data) => {
  switch (data?.type) {
    case "checkbox":
      return <CheckboxFilter list={data.list} />;
    case "range":
      return (
        <RangeFilter
          min={data?.min}
          max={data?.max}
          prefix={data?.prefix}
          suffix={data?.suffix}
        />
      );
    default:
      return null;
  }
};

// Filter Component
const Filter = ({ data }) => {
  const [open, setOpen] = useState(data?.isDefaultExpand || false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.box}>
      {(data.type === "checkbox" && data?.list) || data.type === "range" ? (
        <Box onClick={handleClick} sx={styles.box2}>
          <Typography sx={styles.typography}>
            {data?.title.toUpperCase()}
          </Typography>
          <IconButton edge="end" aria-label="expand">
            {open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
      ) : null}
      {(data.type === "checkbox" && data?.list) || data.type === "range" ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          {filterPicker(data)}
        </Collapse>
      ) : null}
    </Box>
  );
};

export default Filter;
