import { Button, Link, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import image from "./images/getstarted.jpg";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "white", fontWeight: "700" }}
          >
            Featured Properties
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Everything you need to know about CMS!
          </Typography>
          <Link href="/register">
            <CustomButton
              backgroundColor="#fff"
              color="#17275F"
              buttonText="Get Started Now"
              getStartedBtn={true}
            />
          </Link>
        </Box>
        <img
          src={image}
          alt="illustration"
          style={{ maxWidth: "100%", height: "100%", objectFit: "cover" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default GetStarted;
