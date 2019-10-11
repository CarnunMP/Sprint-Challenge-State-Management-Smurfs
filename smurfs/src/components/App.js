import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import GetSmurfsButton from "./GetSmurfsButton";
import ClearSmurfsButton from "./ClearSmurfsButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetSmurfsButton />
        <ClearSmurfsButton />
        <Smurfs />
      </div>
    );
  }
}

export default App;
