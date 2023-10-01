import React from "react";
import IconButton from "@mui/material/IconButton";
import {
  BarChart,
  Settings,
  Lock,
  ShoppingCart,
  Person,
  PersonAdd,
  People,
  Cancel,
} from "@mui/icons-material";
import {
  useMediaQuery,
  Link,
  Stack,
  Divider,
  Drawer,
  Box,
} from "@mui/material";
import SimpleBar from "simplebar-react";
import { styled } from "@mui/material/styles";
import Logo from "../layout/images/Logo.jpg";
import { SideNavItem } from "./Side-Nav-Item";

import { useLocation } from "react-router-dom";

export const Scrollbar = styled(SimpleBar)``;

const items = [
  {
    title: "Overview",
    path: "/",
    icon: <BarChart fontSize="small" />,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <People fontSize="small" />,
  },
  {
    title: "Companies",
    path: "/companies",
    icon: <ShoppingCart fontSize="small" />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <Person fontSize="small" />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Settings fontSize="small" />,
  },
  {
    title: "Login",
    path: "/auth/login",
    icon: <Lock fontSize="small" />,
  },
  {
    title: "Register",
    path: "/auth/register",
    icon: <PersonAdd fontSize="small" />,
  },
  {
    title: "Error",
    path: "/404",
    icon: <Cancel fontSize="small" />,
  },
];
export const SideNav = (props) => {
  const { open, onClose } = props;
  const Location = useLocation();
  const lgUP = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "neutral.400",
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        <IconButton
          component={Link}
          href="/"
          sx={{ display: "inline-flex", height: 32, width: 32 }}
        >
          <Logo />
        </IconButton>
      </Box>

      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          borderRadius: 1,
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
          p: "12px",
        }}
      >
        {/* <div>
          <Typography color="inherit" variant="subtitle1">
            Devias
          </Typography>
          <Typography color="neutral.400" variant="body2">
            Production
          </Typography>
        </div> */}
      </Box>

      <Divider sx={{ borderColor: "neutral.700" }} />
      <Box
        component="nav"
        sx={{
          flexGrow: 1,
          px: 2,
          py: 3,
        }}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{ listStyle: "none", p: 0, m: 0 }}
        >
          {items.map((item) => {
            const active = item.push ? Location === item.path : false;

            return (
              <SideNavItem
                active={active}
                disabled={item.disabled}
                external={item.external}
                icon={item.icon}
                key={item.title}
                path={item.path}
                title={item.title}
              />
            );
          })}
        </Stack>
      </Box>
    </Scrollbar>
  );

  if (lgUP) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        varient="permanet"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
