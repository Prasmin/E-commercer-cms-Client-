import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { requestSuccess } from "../login/authSlice";
import { IconButton, Typography, Button, Hidden } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/Logo.jpg";
import Avatar from "@mui/material/Avatar";

export const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(requestSuccess({}));
  };
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
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Box>

        <Box>
          <Hidden mdDown>
            <Button variant="contained" size="medium">
              Sign Up
            </Button>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
