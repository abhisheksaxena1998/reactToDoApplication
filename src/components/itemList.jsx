import React, { Component } from "react";
import swal from "sweetalert";
import "./itemList.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class ListItems extends Component {
  getBadgeClasses(item) {
    console.log("new list", item.status);
    let classes = "form-control-new-";

    classes += item.status === "Completed" ? "completed" : "notcompleted";
    console.log(classes);
    return classes;
  }
  getPillClasses(item) {
    let classes = "badge badge-pill badge-";
    classes += item.status === "Completed" ? "success" : "warning";
    return classes;
  }
  render() {
    console.log("Item list", this.props.items);
    const items = this.props.items;
    const listItems = items.map((item) => {
      console.log("single item", item);
      return (
        <div className="list" key={item.key}>
          <div className="newRow">
            <input
              type="text"
              className={this.getBadgeClasses(item)}
              id={item.key}
              value={item.text}
              onChange={(e) => {
                this.props.setUpdate(e.target.value, item.key);
              }}
            />
          </div>
          <div className="newButtonRow">
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                swal("Deleted !", "Task deleted :)", "error");
                this.props.deleteItem(item.key);
              }}
            >
              Delete Task !
            </button>
            <button
              className="btn dusty-grass-gradient btn-sm"
              onClick={() => {
                swal("Done !", "Marked as done :)", "success");
                this.props.markdoneItem(item);
              }}
            >
              Mark as Done !
            </button>
            <button
              className="btn sunny-morning-gradient btn-sm"
              onClick={() => {
                swal("Pending !", "Marked as pending :)", "info");
                this.props.markincompleteItem(item);
              }}
            >
              Mark as incomplete !
            </button>
            <span className={this.getPillClasses(item)}>
              Status: {item.status}
            </span>
          </div>
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
