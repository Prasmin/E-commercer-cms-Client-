import { useDispatch, useSelector } from "react-redux";
import { requestSuccess } from "../login/authSlice";
import {
  IconButton,
  Button,
  Hidden,
  AppBar,
  Box,
  Link,
  ListItemText,
  Divider,
  List,
  Toolbar,
  ListItem,
  Drawer,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/Logo.jpg";
import Avatar from "@mui/material/Avatar";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CustomButton from "./CustomButton";

export const Header = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  }));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOnLogout = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(requestSuccess({}));
  };

  const sections = [
    { title: "Pricing", url: "/pricing" },
    { title: "About", url: "/about" },
  ];

  const drawerWidth = "100%";

  return (
    <AppBar sx={{ backgroundColor: "#fafafa" }} position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Avatar component={Link} href="/" alt="logo" src={logo} />

          <Hidden mdUp>
            <IconButton
              size="large"
              aria-label="menu"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                },
              }}
              anchor="right"
              open={open}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />

              <List>
                {sections.map((section) => (
                  <ListItem key={section.title} disablePadding>
                    <ListItemButton component="a" href={section.url}>
                      <ListItemText primary={section.title} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>

              <Link href="/login">
                <CustomButton
                  backgroundColor="#0F1B4C"
                  color="#fff"
                  buttonText="Login"
                  heroBtn={true}
                />
              </Link>
              {/* <Button
                component={Link}
                href="/login"
                sx={{ m: 1 }}
                variant="contained"
                size="medium "
                color="#000336"
              >
                login
              </Button> */}
            </Drawer>
          </Hidden>

          <Hidden mdDown>
            <Toolbar
              component="nav"
              variant="dense"
              sx={{ justifyContent: "space-between", overflowX: "auto" }}
            >
              {sections.map((section) => (
                <Link
                  noWrap
                  color="black"
                  underline="none"
                  key={section.title}
                  variant="h6"
                  href={section.url}
                  sx={{ p: 1 }}
                >
                  {section.title}
                </Link>
              ))}
            </Toolbar>
          </Hidden>
        </Box>

        <Box sx={{ display: "flex", mx: 5 }}>
          <Hidden mdDown>
            <Link href="/login">
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Login"
                heroBtn={true}
              />
            </Link>

            {/* <Link href="/login">
              <Button variant="outlined" size="medium ">
                login
              </Button>
            </Link> */}

            {/* <Link href="/register">
              <Button variant="contained" size="medium" sx={{ m: 1 }}>
                Start free trial
              </Button>
            </Link> */}
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
