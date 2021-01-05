import React, { Component } from "react";

class ListItems extends Component {
  render() {
    console.log("Item list", this.props.items);
    const items = this.props.items;
    const listItems = items.map((item) => {
      return (
        <div className="list" key={item.key}>
          <p>
            <input type="text" id={item.key} value={item.text} />
            <span>
              <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => {
                  console.log(item.key);
                }}
              >
                button
              </button>
            </span>
          </p>
        </div>
      );
    });
    return (
      <div>
        <span>{listItems}</span>
      </div>
    );
  }
}

export default ListItems;
