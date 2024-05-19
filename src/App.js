import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

import HomePage from "./components/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import Logout from "./components/Logout/Logout";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <>
        <header className="header">
          <nav>
            <ul className="navigation">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </nav>
        </header>
        <main className="main">
          <div className="content">
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </div>
        </main>
      </>
    </Router>
  );
}

export default App;
