import React from "react";
import "./App.css";

import SVGComponent from "./components/SVGComponent";
import ProgressTracker from "./components/ProgressTracker";

function App() {
  return (
    <div className="App">
      <header>
        <p className="font-bold text-2xl uppercase m-4">Muscle Tracker App</p>
      </header>
      <SVGComponent />
      <ProgressTracker />
    </div>
  );
}

export default App;
