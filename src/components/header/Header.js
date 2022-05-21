// external imports
import React, { useState } from "react";
import {
  Badge,
  Box,
  Container,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";

// internal imports
import Cart from "../cart/Cart";
import { toggleCart } from "../../store/actions/cart";

const styles = {
  box: {
    width: "100%",
    height: "fit-content",
    pt: 1,
    pb: 1,
    color: "text.white",
    backgroundColor: "primary.main",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 2,
  },
  toolbar: {
    pl: "0 !important",
    pr: "0 !important",
  },
  typography1: {
    fontSize: "25px",
    mr: 5,
  },
  typography2: {
    mr: 2,
  },
  box2: {
    display: {
      xs: "none",
      md: "flex",
    },
    alignItems: "center",
  },
  box3: {
    backgroundColor: "text.white",
    display: {
      xs: "none",
      md: "flex",
    },
    p: 1,
    alignItems: "center",
    color: "text.primary",
    borderRadius: 1,
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
    width: 90,
    fontSize: "12px",
    ml: 1,
    mr: 1,
    "& .MuiInput-input": {
      pb: 0,
    },
  },
  textField: {
    width: 280,
    "& .MuiInput-root": {
      fontSize: "12px",
    },
    "& input": {
      pb: 0,
    },
    "& .MuiInput-root:before": {
      borderBottom: "none",
    },
  },
};

const options = ["Eranakulam", "Palakadu", "Cochin"];

// SearchBar Component
const SearchBar = () => {
  const [userLocation, setUserLocation] = useState(options[0]);

  const handleSelect = ({ target: { value } }) => setUserLocation(value);

  return (
    <Box sx={styles.box3}>
      <FmdGoodOutlinedIcon />
      <FormControl variant="standard" size="small" sx={styles.formControl}>
        <Select value={userLocation} onChange={handleSelect} sx={styles.select}>
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        size="small"
        variant="standard"
        sx={styles.textField}
        placeholder="Search for Products, Brands & Categories"
      />
      <SearchOutlinedIcon />
    </Box>
  );
};

// Header Component
const Header = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(({ cart }) => cart?.cart);

  let total = 0;
  if (cartData.length) {
    cartData.forEach((item) => {
      total += item?.count || 0;
    });
  }

  const handleOpen = () => {
    dispatch(toggleCart());
  };

  return (
    <Box sx={styles.box}>
      <Container>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.box2}>
            <Typography component="div" sx={styles.typography1}>
              Medicare
            </Typography>
            <SearchBar />
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={styles.box2}>
            <Typography variant="caption" sx={styles.typography2}>
              Login | SignUp
            </Typography>
            <PersonOutlinedIcon />
            <IconButton color="inherit" onClick={handleOpen}>
              <Badge badgeContent={total} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Cart total={total} />
    </Box>
  );
};

export default Header;
