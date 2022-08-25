import React, { useState } from "react";
import states from "./data/states";
import "./App.css";

function App() {
  const [selectedState, setSelectedState] = useState("IL");
  const stateAbbreviations = Object.keys(states).map((a) => a.toUpperCase());

  return (
    <div>
      <a href="https://github.com/joeyschoblaska/inseason">
        <img
          style={{ position: "absolute", top: 0, right: 0, border: 0 }}
          src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
          alt="Fork me on GitHub"
        />
      </a>
      <div className="container">
        <div className="header-image">
          <img src={`/images/headers/${selectedState.toLowerCase()}.png`} />
        </div>
        <div className="controls">
          <form id="controls">
            <input className="search" type="text" placeholder="search" />
            <select
              className="state-selector"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              {stateAbbreviations.map((abbrev) => (
                <option value={abbrev}>{abbrev}</option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
