import React, { useState } from "react";

import Controls from "./components/Controls";
import GithubBanner from "./components/GithubBanner";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [stateKey, setStateKey] = useState("IL");
  const data = require("./data.json");
  const stateKeys = Object.keys(data);

  return (
    <div>
      <GithubBanner />
      <div className="container">
        <Header stateKey={stateKey} />
        <Controls
          stateKey={stateKey}
          setStateKey={setStateKey}
          stateKeys={stateKeys}
        />
      </div>
    </div>
  );
}

export default App;
