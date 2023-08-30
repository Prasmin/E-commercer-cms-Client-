import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box, Button, Link, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Header />
      <Box sx={{}}>
        <Typography variant="h3">
          Elevate Your Business With CMS Platform.{" "}
        </Typography>
        <Typography variant="subtitle1">
          A good Content Management System (CMS) makes running an ecommerce
          store easy. Instead of spending hours on the boring, technical aspects
          of maintaining an online presence, you can focus on actually selling
          your products.
        </Typography>
        <Link href="/register">
          <Button variant="contained" size="medium" sx={{ m: 1 }}>
            Start free trial
          </Button>
        </Link>
      </Box>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
