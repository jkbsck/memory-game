import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  return (
    <div
      className="App bg-info"
      style={{ height: "100vh", maxWidth: "100vh", margin: "0 auto" }}
    >
      {/* <Header /> */}
      <Main />
    </div>
  );
}

export default App;
