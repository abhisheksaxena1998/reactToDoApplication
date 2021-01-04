import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="Enter task"></input>
            <button type="submit">Add task</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
