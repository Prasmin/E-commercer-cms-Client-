import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import CategoryIcon from "@mui/icons-material/Category";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaymentIcon from "@mui/icons-material/Payment";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ProductionQuantityLimitsRoundedIcon from "@mui/icons-material/ProductionQuantityLimitsRounded";

import { Link } from "@mui/material";

export const mainListItems = (
  <React.Fragment>
    <Link href="/dashboard" style={{ color: "black", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>

    <Link href="/category" style={{ color: "black", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Category" />
      </ListItemButton>
    </Link>
    <Link href="/orders" style={{ color: "black", textDecoration: "none" }}>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
    </Link>

    <Link style={{ color: "black", textDecoration: "none" }} href="/customers">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
    </Link>

    <Link
      style={{ color: "black", textDecoration: "none" }}
      href="/payment-methods"
    >
      <ListItemButton>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="Payment" />
      </ListItemButton>
    </Link>

    <Link style={{ color: "black", textDecoration: "none" }} href="/products">
      <ListItemButton>
        <ListItemIcon>
          <ProductionQuantityLimitsRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
      </ListItemButton>
    </Link>

    <Link style={{ color: "black", textDecoration: "none" }} href="/setting">
      <ListItemButton>
        <ListItemIcon>
          <SettingsRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
