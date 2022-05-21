// external imports
import React, { useState } from "react";
import { Box, Input, Slider, Typography } from "@mui/material";

const styles = {
  box1: {
    pl: 2,
    pr: 2,
  },
  box2: {
    display: "flex",
    justifyContent: "space-between",
    mt: 1,
    mb: 3,
    "& .MuiInput-root:before": {
      borderBottom: "none",
    },
    "& .MuiInput-root:hover:before": {
      borderBottom: "none !important",
    },
  },
  box3: {
    pl: 0.5,
    pr: 0.5,
    display: "flex",
    color: "text.black",
    alignItems: "center",
    backgroundColor: "text.lightGray",
  },
  input: {
    color: "text.black",
  },
};

// RangeFilter Component
const RangeFilter = ({
  min = 0,
  max = 100,
  step = 1,
  prefix = "",
  suffix = "",
}) => {
  const [value, setValue] = useState([min, max]);

  const valueText = (value) => {
    return `${prefix}${value}${suffix}`;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event, index) => {
    const val = event.target.value === "" ? "" : Number(event.target.value);
    let newVal = [...value];
    newVal[index] = val;
    setValue(newVal);
  };

  const handleBlur = (event, index) => {
    const val = event.target.value === "" ? "" : Number(event.target.value);
    let newVal = [...value];
    if (index === 0 && val < min) {
      newVal[index] = min;
      setValue(newVal);
    }
    if (index === 1 && val > max) {
      newVal[index] = max;
      setValue(newVal);
    }
  };

  return (
    <Box sx={styles.box1}>
      <Box sx={styles.box2}>
        <Box sx={styles.box3}>
          <Typography sx={styles.typography}>{prefix}</Typography>
          <Input
            value={value[0]}
            size="small"
            onChange={(e) => handleInputChange(e, 0)}
            onBlur={(e) => handleBlur(e, 0)}
            inputProps={{
              min: min,
              max: max - 1,
              step: step,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            sx={styles.input}
          />
          <Typography sx={styles.typography}>{suffix}</Typography>
        </Box>
        <Box sx={styles.box3}>
          <Typography sx={styles.typography}>{prefix}</Typography>
          <Input
            value={value[1]}
            size="small"
            onChange={(e) => handleInputChange(e, 1)}
            onBlur={(e) => handleBlur(e, 1)}
            inputProps={{
              min: min + 1,
              max: max,
              step: step,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            sx={styles.input}
          />
          <Typography sx={styles.typography}>{suffix}</Typography>
        </Box>
      </Box>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
        aria-labelledby="input-slider"
      />
    </Box>
  );
};

export default RangeFilter;
