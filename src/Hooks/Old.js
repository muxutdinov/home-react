import React from "react";
import Hooks from "./Hooks";
class Old extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      status: "student",
    };
  }
  render() {
    return (
      <div>
        Old <br />
        <input
          placeholder="status"
          value={this.state.status}
          onChange={(e) => this.setState({ status: e.target.value })}
        />
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
        <hr />
        <Hooks count={this.state.counter} text={this.state.status} />
      </div>
    );
  }
}
export default Old;
