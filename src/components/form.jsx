import React, { Component } from "react";

class Formz extends Component {
  render() {
    return (
      <div>
        <input placeholder="Enter task"></input>
        <button
          onClick={this.props.onClick}
          className="btn btn-primary btn-sm m-2"
        >
          Add task
        </button>
        <button onClick={this.props.onReset}>Reset</button>
      </div>
    );
  }
}

export default Formz;
