import React, { useState, Dispatch, SetStateAction } from "react";
import "./App.css";

const GithubBanner = () => (
  <a href="https://github.com/joeyschoblaska/inseason">
    <img
      style={{ position: "absolute", top: 0, right: 0, border: 0 }}
      src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
      alt="Fork me on GitHub"
    />
  </a>
);

const Header = ({ stateKey }: { stateKey: string }) => (
  <div className="header-image">
    <img src={`/images/headers/${stateKey.toLowerCase()}.png`} alt="banner" />
  </div>
);

const Controls = ({
  stateKeys,
  stateKey,
  setStateKey,
}: {
  stateKeys: string[];
  stateKey: string;
  setStateKey: Dispatch<SetStateAction<string>>;
}) => (
  <div className="controls">
    <form id="controls">
      <input className="search" type="text" placeholder="search" />
      <select
        className="state-selector"
        value={stateKey}
        onChange={(e) => setStateKey(e.target.value)}
      >
        {stateKeys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </form>
  </div>
);

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
