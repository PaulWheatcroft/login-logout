import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./HomePage.css";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user ? (
        <>
          <h1>Welcome {user.name} you are...</h1>
          <div className="logo">Logged in</div>
        </>
      ) : (
        <>
          <h1>Welcome to the world of</h1>
          <div className="logo">
            Login ⮕ <br />⬅ Logout
          </div>
          <p>
            please <Link to="/login">Login</Link> for all the things
          </p>
        </>
      )}
    </>
  );
};

export default HomePage;
