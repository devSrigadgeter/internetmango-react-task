// external imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Grid, Typography } from "@mui/material";

// internal imports
import Filters from "../../components/filters/Filters";
import Carousel from "../../components/carousel/Carousel";
import ProductCard from "../../components/product/ProductCard";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CustomPagination from "../../components/pagination/CustomPagination";
import { PRODUCTS_API_URL } from "../../utils/ApiConstants";

const NO_OF_PRODUCTS_PER_PAGE = 16;

const styles = {
  bold: {
    fontWeight: "bold",
  },
  typography: {
    mt: 2,
    mb: 2,
    color: "text.black",
  },
  productsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
};

// Products section
const Products = () => {
  const [products, setProducts] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const fetchProducts = () => {
    axios
      .get(PRODUCTS_API_URL)
      .then((res) => {
        const responseData = res?.data || [];
        if (responseData.length) {
          setProducts(responseData);
          setPageCount(
            Math.ceil(responseData.length / NO_OF_PRODUCTS_PER_PAGE)
          );
          setPaginatedData(responseData.slice(0, NO_OF_PRODUCTS_PER_PAGE));
        }
      })
      .catch((err) => console.error(err));
  };

  const fetchPageNumber = (page) => {
    const currentProducts = products.slice(
      (page - 1) * NO_OF_PRODUCTS_PER_PAGE,
      page * NO_OF_PRODUCTS_PER_PAGE
    );
    setPaginatedData(currentProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3.5}>
            <Filters />
          </Grid>
          <Grid item md={8.5}>
            <Breadcrumb />
            <Typography
              variant="h5"
              component="div"
              sx={[styles.typography, styles.bold]}
            >
              COVID TEST & PREVENTION
            </Typography>
            <Carousel />
            <Typography component="div" sx={styles.typography}>
              Shop by category
            </Typography>
            <Box sx={styles.productsList}>
              {paginatedData.map((data) => (
                <ProductCard key={data.id} data={data} />
              ))}
            </Box>
            <CustomPagination
              pageCount={pageCount}
              sendPage={fetchPageNumber}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
