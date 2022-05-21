// external imports
import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const styles = {
  box1: {
    mt: 3,
    mb: 3,
  },
  box2: {
    width: "100%",
    height: "100%",
    display: "block",
    overflow: "hidden",
  },
};

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "http://placehold.jp/800x150.png",
  },
  {
    label: "Bird",
    imgPath: "http://placehold.jp/850x150.png",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "http://placehold.jp/830x150.png",
  },
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// Carousel Component
const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={styles.box1}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={styles.box2}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default Carousel;
