import React, { useState, useEffect } from "react";

function Mode() {
  const [mode, setmode] = useState(false);

  return (
    <div>
      <div className={mode ? "dark-mode" : "light-mode"}>
        <label className="switch">
          <input type="checkbox" onChange={() => setmode(!mode)} />
          <span className="slider round"></span>
        </label>
        <label className="switch-label"> {mode ? "Dark" : "Light"}</label>
      </div>{" "}
    </div>
  );
}

export default Mode;
