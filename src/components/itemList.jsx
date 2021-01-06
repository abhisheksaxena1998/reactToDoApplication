import React, { Component } from "react";
import swal from "sweetalert";
import "./itemList.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class ListItems extends Component {
  render() {
    console.log("Item list", this.props.items);
    const items = this.props.items;
    const listItems = items.map((item) => {
      return (
        <div className="list" key={item.key}>
          <p>
            <div className="newRow">
              <input
                type="text"
                className="form-control"
                id={item.key}
                value={item.text}
                onChange={(e) => {
                  this.props.setUpdate(e.target.value, item.key);
                }}
              />
            </div>
            <div className="newButtonRow">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => {
                  swal("Deleted !", "Marked as done :)", "error");
                  this.props.deleteItem(item.key);
                }}
              >
                Mark as Done !
              </button>
            </div>
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
