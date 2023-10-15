import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Box, Container, styled, Link, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import GetStarted from "./GetStarted";

export const HomePage = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItmes: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <>
      <Header />
      <Box sx={{ minHeight: "80vh" }}>
        <Container>
          <CustomBox>
            <Box sx={{ flex: "1" }}>
              <Title variant="body1">
                Elevate Your Business With CMS Platform.
              </Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                Be the first to get the best real estate deals before they hit
                the mass market! Hot foreclosure deals with one simple search!
              </Typography>
              <Link href="/register">
                <CustomButton
                  backgroundColor="#0F1B4C"
                  color="#fff"
                  buttonText="Get Started"
                  heroBtn={true}
                />
              </Link>
            </Box>
          </CustomBox>
        </Container>
      </Box>

      <GetStarted />

      <Footer />
    </>
  );
};
