import React from "react";
import "./App.css";

import SVGComponent from "./components/SVGComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SVGComponent />
        <p className="font-bold underline text-3xl">Muscle Tracker App</p>
      </header>
    </div>
  );
}

export default App;
