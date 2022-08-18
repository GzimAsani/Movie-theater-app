import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';
// import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (

    <div className="header">
      <Link to='/Movies'><h3><h3 className="header-h1">Movie</h3></h3></Link>
      <div className="header-mid">
        {/* <SearchIcon className="header-icon" /> */}  
      </div>
      <div className="header-right">
        <div className="header-right-SignUp">
           <Link to='/SignUp'><h3>Sign up</h3></Link>
        </div>
        <div className="header-right-login">
           <Link to='/Login'><h3>Login</h3></Link>
        </div>
      </div>
    </div>
  );    
}

export default Header;
