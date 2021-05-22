import "./App.css";

import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [blurBg, setBlurBg] = useState("blur");

  return (
    <div className={`App ${blurBg}`}>
      <Main setBlurBg={setBlurBg} />
      <img
        className="bg-img"
        src="https://cdn.wallpapersafari.com/91/15/317d0k.jpg"
        alt="space"
      />
    </div>
  );
}

export default App;
