import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
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
