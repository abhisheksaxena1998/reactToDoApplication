import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img
            src="https://raw.githubusercontent.com/abhisheksaxena1998/reactToDoApplication/main/src/og-image.png"
            height="60"
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
