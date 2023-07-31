import { useState } from "react";
import React from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenitcate";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;
