import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { requestSuccess } from "../login/authSlice";
import { IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./images/Logo.jpg";

export const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(requestSuccess({}));
  };
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="logo"
            style={{ height: "40px" }}
            component="div"
            sx={{ flexGrow: 1 }}
          />

          <Button variant="contained" size="medium">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
