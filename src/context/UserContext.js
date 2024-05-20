import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();

const checkTime = (storedTokenDateTime) => {
  const currentDateTime = new Date();
  const timeDifference = currentDateTime - storedTokenDateTime;
  return timeDifference;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedTokenAge = checkTime(localStorage.getItem("token-date-time"));

    if (storedToken && storedUser && storedTokenAge < 600000) {
      const parsedUser = JSON.parse(storedUser);

      axios
        .get("http://localhost:3333/verifyToken", {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setUser(parsedUser);
          } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setUser(null);
          }
        })
        .catch((error) => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
        });
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
