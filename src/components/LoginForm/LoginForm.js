import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("login", {
        username,
        password,
      });

      if (response.status === 200) {
        const { user, token } = response.data;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        login(user);

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token-date-time", Date.now());

        navigate("/");
      }

      setUsername("");
      setPassword("");
    } catch (error) {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <h1>Please login</h1>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
