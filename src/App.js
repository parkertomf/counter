import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Counter from "./counter";

class App extends Component {
  render() {
    return (
      <div class="grid-container">
        <div class="grid-item">
          <Button variant="contained" color="primary">
            Reset
          </Button>
        </div>
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
      </div>
    );
  }
}

export default App;
