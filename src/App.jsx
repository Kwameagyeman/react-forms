import { useState } from "react";
import React from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenitcate";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="app">
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}

export default App;
