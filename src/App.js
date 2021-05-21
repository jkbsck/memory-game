import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div
      className="App"
      // style={{ height: "100vh", minHeight: "min-content" }}
    >
      <Header />
      <Main />
    </div>
  );
}

export default App;
