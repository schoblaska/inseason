import React, { useState, useMemo } from "react";

import Controls from "./components/Controls";
import GithubBanner from "./components/GithubBanner";
import Header from "./components/Header";
import Crops from "./components/Crops";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [stateKey, setStateKey] = useState("IL");
  const [search, setSearch] = useState("");
  const data = useMemo(() => require("./data.json"), []);
  const stateKeys = Object.keys(data);
  const crops = data[stateKey]["crops"];

  return (
    <div>
      <GithubBanner />
      <div className="container">
        <Header stateKey={stateKey} />
        <Controls
          stateKeys={stateKeys}
          stateKey={stateKey}
          setStateKey={setStateKey}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <Crops crops={crops} search={search} />
      <Footer />
    </div>
  );
}

export default App;
