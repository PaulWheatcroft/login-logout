import React, { useState } from "react";
import axios from "axios";

import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("****", username);
  console.log("****", password);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3333/login", {
        username,
        password,
      });

      const { user, token } = response.data;
      console.log(user, token);

      setUsername("");
      setPassword("");
    } catch (error) {
      console.log("Invalid username or password");
    }
  };

  return (
    <>
      <h1>Please login</h1>
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
