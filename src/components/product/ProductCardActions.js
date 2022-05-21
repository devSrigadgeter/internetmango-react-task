// external imports
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// internal imports
import {
  addProduct,
  removeProduct,
  updateProductCount,
} from "../../store/actions/cart";

const styles = {
  box: {
    display: "flex",
    height: "40px",
    alignItems: "center",
  },
  colorWhite: {
    color: "text.white",
  },
};

// ProductCardActions component
const ProductCardActions = ({ product }) => {
  const productId = product?.id;
  const [count, setCount] = useState(0);
  const productsInCart = useSelector(({ cart }) => cart.cart);
  const filteredProducts = productsInCart.filter(
    (item) => item?.product?.id === productId
  );
  let filteredProduct = {};

  if (filteredProducts.length) filteredProduct = filteredProducts[0];

  const dispatch = useDispatch();

  useEffect(() => {
    if (filteredProduct.count) setCount(filteredProduct?.count);
  }, []);

  const handleIncreaseOrDecrease = (isIncrease = false) => {
    let currentCount = count;
    if (isIncrease) currentCount += 1;
    else currentCount -= 1;
    setCount(currentCount);
    return currentCount;
  };

  const handleClickAdd = () => {
    const currentCount = handleIncreaseOrDecrease(true);
    dispatch(addProduct(product, currentCount));
  };

  const handleIncrease = () => {
    const currentCount = handleIncreaseOrDecrease(true);
    dispatch(updateProductCount(productId, currentCount));
  };

  const handleDecrease = () => {
    const currentCount = handleIncreaseOrDecrease();
    if (currentCount === 0) dispatch(removeProduct(productId));
    else dispatch(updateProductCount(productId, currentCount));
  };

  return (
    <Box sx={styles.box}>
      {count === 0 && (
        <Button
          size="small"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          sx={styles.colorWhite}
          onClick={handleClickAdd}
        >
          Add
        </Button>
      )}
      {count !== 0 && (
        <Fragment>
          <IconButton color="primary" component="span" onClick={handleDecrease}>
            <RemoveIcon />
          </IconButton>
          <Typography
            noWrap
            variant="caption"
            component="span"
            sx={styles.smallSizeText}
          >
            {count}
          </Typography>
          <IconButton color="primary" component="span" onClick={handleIncrease}>
            <AddIcon />
          </IconButton>
        </Fragment>
      )}
    </Box>
  );
};

export default ProductCardActions;
