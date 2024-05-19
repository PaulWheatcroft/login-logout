import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Logout from "../Logout/Logout";
import "./Header.css";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{user ? <Logout /> : <Link to="/login">Login</Link>}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
