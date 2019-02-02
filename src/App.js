import React, { Component } from "react";
import * as tf from "@tensorflow/tfjs";
import "./App.css";

class App extends Component {
  state = {
    model: "hey"
  };
  async componentDidMount() {
    const model = await tf.loadModel("http://localhost:3000/src/model.json");
    this.setState(model);
  }

  render() {
    return <h2>{this.state.model}</h2>;
  }
}

export default App;
