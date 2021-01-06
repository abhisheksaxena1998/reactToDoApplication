import React, { Component } from "react";

class ListItems extends Component {
  render() {
    console.log("Item list", this.props.items);
    const items = this.props.items;
    const listItems = items.map((item) => {
      return (
        <div className="list" key={item.key}>
          <p>
            <span>
              <input
                type="text"
                className="form-control"
                id={item.key}
                value={item.text}
                onChange={(e) => {
                  this.props.setUpdate(e.target.value, item.key);
                }}
              />
            </span>
            <span>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  this.props.deleteItem(item.key);
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
