import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import GetSmurfsButton from "./GetSmurfsButton";
import ClearSmurfsButton from "./ClearSmurfsButton";
import SmurfForm from "./SmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetSmurfsButton />
        <ClearSmurfsButton />
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
