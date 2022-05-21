// external imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// internal imports
import { toggleCart } from "../../store/actions/cart";

const styles = {
  box: {
    p: 2,
    zIndex: 3,
    top: "65px",
    right: "100px",
    width: "300px",
    borderRadius: 2,
    position: "absolute",
    height: "fit-content",
    backgroundColor: "text.white",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
  notShowBox: {
    display: "none",
  },
  showBox: {
    display: "block",
  },
  typography1: {
    ml: 0.5,
    color: "text.primary",
  },
  bold: {
    fontWeight: "bold",
  },
  count: {
    mr: 1.2,
  },
  box2: {
    mt: 1,
  },
  btn: {
    mt: 2,
    color: "text.white",
  },
};

// Cart Component
const Cart = ({ total }) => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(({ cart }) => cart?.isOpen);
  const cartData = useSelector(({ cart }) => cart?.cart);

  const handleClose = () => {
    dispatch(toggleCart());
  };

  const handleCheckout = () => {
    console.log("checking out items >>", cartData);
  };

  return (
    <Box
      sx={[
        styles.box,
        isCartOpen && styles.showBox,
        !isCartOpen && styles.notShowBox,
      ]}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          noWrap
          component="span"
          sx={[styles.typography1, styles.bold]}
        >
          {`${total} item${total > 1 ? "s" : ""} in the cart`}
        </Typography>
        <IconButton color="primary" component="span" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Box sx={styles.box2}>
        {cartData.length
          ? cartData.map((item) => (
              <Stack
                key={item?.product?.id}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  noWrap
                  component="span"
                  variant="caption"
                  sx={styles.typography1}
                >
                  {item?.product?.title}
                </Typography>
                <Typography
                  noWrap
                  component="span"
                  variant="caption"
                  sx={[styles.typography1, styles.count]}
                >
                  {item?.count}
                </Typography>
              </Stack>
            ))
          : null}
      </Box>
      <Button
        fullWidth
        size="small"
        variant="contained"
        sx={styles.btn}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
