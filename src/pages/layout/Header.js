import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { requestSuccess } from "../login/authSlice";
import { IconButton, Typography, Button } from "@mui/material";
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
    <Box>
      <AppBar sx={{ backgroundColor: "#fafafa" }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Remy Sharp" src={logo} />
          {/* <img
            src={logo}
            alt="logo"
            style={{ height: "40px" }}
            component="div"
            sx={{ flexGrow: 1 }}
          /> */}

          <Button variant="contained" size="medium">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
