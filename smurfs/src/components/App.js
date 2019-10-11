import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import GetSmurfsButton from "./GetSmurfsButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetSmurfsButton />
        <Smurfs />
      </div>
    );
  }
}

export default App;
