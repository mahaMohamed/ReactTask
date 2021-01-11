import React, { Component } from "react";
import Counter from "./containers/Counter";
import Counter2 from "./containers/Counter2"
import GenericCounter from "./containers/GenericCounter"
import { HotKeys } from "react-hotkeys";
import "mousetrap"


const keyMap = {
  INCREMENT_COUNTER: "del",
  DELETE_NODE: ["del", "backspace"]
};

function App() {



  return (
    <div className="App">
      <footer> <b> Press '+' to increment counter, '-' to decrement </b> </footer>

      <GenericCounter className="generic">
        <Counter2 />
      </GenericCounter>

      <GenericCounter className="generic">
        <Counter />
      </GenericCounter>

    </div>

  );
}

export default App;


