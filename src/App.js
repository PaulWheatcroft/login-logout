import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <header className="header">
          <nav>
            <ul className="navigation">
              <li>Login</li>
              <li>Logout</li>
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
