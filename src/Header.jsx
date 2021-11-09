import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_icon"
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
          alt="Image"
        />
      </Link>
      <div className="header_center">
        <input type="text" />
        <Link to="/search">
          <SearchIcon />
        </Link>
      </div>
      <div className="header_right">
        <p>Become a Host</p>
        <ExpandMoreIcon />
        <LanguageIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
