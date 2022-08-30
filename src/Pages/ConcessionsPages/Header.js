import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CartContext from "../../ThemeContext";
import { useContext } from "react";
// import SearchIcon from "@mui/icons-material/Search";

function Header({ onRouteChange, isSignedIn, username }) {
  const { checkifloged } = useContext(CartContext);
  const changevalues = () => {
    onRouteChange("signout");
    checkifloged(false);
  };

  if (isSignedIn) {
    return (
      <div className="header">
        <Link to="/movies">
          <h3>
            <h3 className="header-h1" onClick={() => onRouteChange("home")}>
              Movie
            </h3>
          </h3>
        </Link>
        <div className="header-right">
          <div className="header-right-SignUp">
            <div>
              <p>
                Signed in as <span className="emri">{username}</span>
              </p>
            </div>

            <Link to="/" onClick={changevalues}>
              <h3>Sign Out</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <Link to="/movies">
          <h3>
            <h3 className="header-h1" onClick={() => onRouteChange("signout")}>
              Movie
            </h3>
          </h3>
        </Link>
        <div className="header-right">
          <div className="header-right-SignUp">
            <Link to="/SignUp" onClick={() => onRouteChange("signup")}>
              <h3>Sign up</h3>
            </Link>
          </div>
          <div className="header-right-login">
            <Link to="/Login" onClick={() => onRouteChange("login")}>
              <h3>Login</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
