import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { requestSuccess } from "../login/authSlice";
import {
  IconButton,
  Typography,
  Button,
  Hidden,
  Link,
  ListItemIcon,
  ListItemText,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/Logo.jpg";
import Avatar from "@mui/material/Avatar";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Drawer from "@mui/material/Drawer";

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

  const { user } = useSelector((state) => state.user);
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

  const drawerWidth = 240;

  return (
    <AppBar sx={{ backgroundColor: "#fafafa" }} position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Avatar alt="logo" src={logo} />

          <Hidden mdUp>
            <IconButton
              size="large"
              aria-label="menu"
              edge="start"
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
              variant="persistent"
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
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                  (text, index) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>

              <Divider />
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

        <Box>
          <Hidden mdDown>
            <Button variant="outlined" size="medium ">
              login
            </Button>
            <Button variant="contained" size="medium" sx={{ m: 1 }}>
              Start free trial
            </Button>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
