import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DiamondIcon from "@mui/icons-material/Diamond";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Viniwins</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/" className="link">
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonIcon className="icon" />
            <Link to="/users" className="link">
              <span>Users</span>
            </Link>
          </li>
          <li>
            <InventoryIcon className="icon" />
            <Link to="/products" className="link">
              <span>Products</span>
            </Link>
          </li>
          <li>
            <BorderAllIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <FavoriteBorderIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <DiamondIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
          <p className="title">COLOURS</p>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};
