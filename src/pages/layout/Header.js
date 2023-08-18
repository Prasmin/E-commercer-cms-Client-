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
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#fafafa" }}>
        <Toolbar sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <img src={logo} alt="logo" style={{ height: "40px" }} />
          <Button variant="contained" size="medium">
            GET STARTED
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
