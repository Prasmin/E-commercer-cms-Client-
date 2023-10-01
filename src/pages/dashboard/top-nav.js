import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Material-UI Account Circle Icon
import MenuIcon from "@mui/icons-material/Menu"; // Material-UI Menu Icon
import SearchIcon from "@mui/icons-material/Search"; // Material-UI Search Icon
import PeopleIcon from "@mui/icons-material/People"; // Material-UI People Icon
import NotificationsIcon from "@mui/icons-material/Notifications"; // Material-UI Notifications Icon

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleSearchClick = () => {
    // Add your search functionality here
  };

  const handleContactsClick = () => {
    // Add your contacts functionality here
  };

  const handleNotificationsClick = () => {
    // Add your notifications functionality here
  };

  const handleSignInClick = () => {
    // Handle sign-in or account-related action here
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        position: "sticky",
        left: {
          lg: `${SIDE_NAV_WIDTH}px`,
        },
        top: 0,
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
        },
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Toolbar
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          {!lgUp && (
            <IconButton onClick={onNavOpen}>
              <MenuIcon fontSize="small" />
            </IconButton>
          )}
          <Tooltip title="Search">
            <IconButton onClick={handleSearchClick}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2}>
          <Tooltip title="Contacts">
            <IconButton onClick={handleContactsClick}>
              <PeopleIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton onClick={handleNotificationsClick}>
              <Badge badgeContent={4} color="success" variant="dot">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <IconButton onClick={handleSignInClick}>
            <AccountCircleIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
};
