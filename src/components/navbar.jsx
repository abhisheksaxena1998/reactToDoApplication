import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://www.any.do/v4/images/og-image.png"
            height="50"
            alt=""
            loading="lazy"
          />
          <strong>
            {"  "}
            To-Do Application{" "}
          </strong>
          <span className="badge badge-pill badge-secondary">
            {props.totalTasks}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
