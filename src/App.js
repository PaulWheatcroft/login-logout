import LoginForm from "./LoginForm";
import "./App.css";

function App() {
  return (
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
        <LoginForm />
      </main>
    </>
  );
}

export default App;
