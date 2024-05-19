import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

import HomePage from "./components/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);
  return (
    <Router>
      <>
        <Header user={user} />
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
