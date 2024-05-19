import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import "./HomePage.css";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user ? (
        <h1>Welcome to the world of Login Logout {user.name}</h1>
      ) : (
        <>
          <h1>Welcome to the world of Login Logout</h1>
          <p>please login for all the things</p>
        </>
      )}
    </>
  );
};

export default HomePage;
