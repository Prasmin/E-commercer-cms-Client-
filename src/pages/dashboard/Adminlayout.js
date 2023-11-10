import React, { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          ...(open && {
            width: `calc(100% - 240px)`,
            marginLeft: "240px",
          }),
        }}
      >
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          ...(open && {
            display: "block",
          }),
          ...(open === false && {
            display: "none",
          }),
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">{mainListItems}</List>
        <Divider />
        <List component="nav">{secondaryListItems}</List>
      </Drawer>
      <main
        sx={{
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          ...(open && {
            marginLeft: "240px",
            width: `calc(100% - 240px)`,
          }),
        }}
      >
        <Toolbar />

        <Container>
          <Grid>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                style={{ padding: "20px", marginTop: "20px" }}
              >
                {children}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default AdminLayout;
