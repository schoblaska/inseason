import React, { Dispatch, SetStateAction } from "react";

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

export default Controls;
