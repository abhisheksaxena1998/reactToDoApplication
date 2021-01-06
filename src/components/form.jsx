import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Formz extends Component {
  state = { term: "" };
  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          value={this.state.term}
          placeholder="Enter task"
          onChange={(e) => {
            this.setState({ term: e.target.value });
            console.log(this.state);
          }}
        ></input>
        <button
          onClick={this.props.onClick}
          className="btn btn-primary btn-sm m-2"
        >
          Add task
        </button>
        <button onClick={this.props.onReset}>Mark all as done</button>
      </div>
    );
  }
}

export default Formz;
