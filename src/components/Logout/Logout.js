import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./Logout.css";

const Logout = () => {
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
