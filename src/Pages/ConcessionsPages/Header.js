import React from "react";
import "./Header.css";
import "../ConcessionsPages/Show"
// import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (

    <div className="header">
      <h3 className="header-h1">Movie</h3>
      <div className="header-mid">
        {/* <SearchIcon className="header-icon" /> */}  
      </div>
      <div className="header-right">
        <h3>Login</h3>
      </div>
    </div>
  );    
}

export default Header;
