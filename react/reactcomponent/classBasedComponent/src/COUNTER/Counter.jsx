import React, { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Class Component Counter</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increaseCount}>
          Increase
        </button>
      </div>
    );
  }
}

export default CounterClass;
