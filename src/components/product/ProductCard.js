// external imports
import React from "react";
import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ProductCardActions from "./ProductCardActions";

const styles = {
  card: {
    mb: 3,
    p: 1.5,
    width: "24%",
    height: "100%",
    border: "1px solid",
    borderColor: "text.gray",
    borderRadius: 3,
    position: "relative",
  },
  box1: {
    width: "100%",
    height: "130px",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "60%",
    height: "100%",
    img: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  content: {
    p: 0,
  },
  title: {
    mt: 1,
    fontWeight: "bold",
  },
  smallSizeText: {
    fontSize: "0.7rem",
  },
  description: {
    mt: 0.5,
    mb: 0.5,
    color: "text.darkGray",
  },
  box2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    color: "primary.main",
    fontSize: "0.85rem",
  },
  ratingTag: {
    pl: 0.5,
    pr: 0.5,
    color: "text.white",
    backgroundColor: "background.green",
  },
  box3: {
    color: "text.darkGray",
  },
  mrp: {
    ml: 0.5,
    mr: 0.5,
    textDecoration: "line-through",
  },
  offer: {
    fontWeight: "bold",
    color: "background.green",
  },
  price: {
    fontWeight: "bold",
    color: "primary.main",
  },
  box4: {
    mt: 1,
  },
  colorWhite: {
    color: "text.white",
  },
  offerTag: {
    pl: 1,
    pr: 1.5,
    width: "fit-content",
    backgroundColor: "text.red",
    position: "absolute",
    top: 0,
    left: 0,
  },
};

// ProductCard component
const ProductCard = ({ data }) => {
  return (
    <Stack spacing={2} sx={styles.card}>
      <Box sx={styles.box1}>
        <Avatar
          variant="rounded"
          alt={data?.title}
          src={data?.image}
          sx={styles.image}
        >
          {CategoryOutlinedIcon}
        </Avatar>
      </Box>
      <Box sx={styles.content}>
        <Typography noWrap variant="caption" component="div" sx={styles.title}>
          {data?.title}
        </Typography>
        <Typography
          noWrap
          variant="caption"
          component="div"
          sx={[styles.description, styles.smallSizeText]}
        >
          {data?.description}
        </Typography>
        <Box sx={styles.box2}>
          <Rating
            readOnly
            size="small"
            sx={styles.rating}
            name="read-only-rating"
            value={data?.rating?.rate}
          />
          <Typography
            noWrap
            variant="caption"
            component="span"
            sx={[styles.ratingTag, styles.smallSizeText]}
          >
            {data?.rating?.rate}
          </Typography>
          <Typography
            noWrap
            variant="caption"
            component="span"
            sx={[styles.description, styles.smallSizeText]}
          >
            {`${data?.rating?.count} Ratings`}
          </Typography>
        </Box>
        <Box sx={styles.box3}>
          <Typography
            noWrap
            variant="caption"
            component="span"
            sx={styles.smallSizeText}
          >
            MRP
          </Typography>
          <Typography
            noWrap
            variant="caption"
            component="span"
            sx={[styles.mrp, styles.smallSizeText]}
          >
            &#8377;{data?.price}
          </Typography>
          <Typography
            noWrap
            variant="caption"
            component="span"
            sx={[styles.offer, styles.smallSizeText]}
          >
            26% off
          </Typography>
        </Box>
        <Box sx={[styles.box2, styles.box4]}>
          <Typography variant="body2" component="span" sx={[styles.price]}>
            &#8377;{data?.price}
          </Typography>
          <ProductCardActions product={data} />
        </Box>
      </Box>
      <Box sx={styles.offerTag}>
        <Typography
          noWrap
          variant="caption"
          component="span"
          sx={[styles.colorWhite, styles.smallSizeText]}
        >
          50% Off
        </Typography>
      </Box>
    </Stack>
  );
};

export default ProductCard;
