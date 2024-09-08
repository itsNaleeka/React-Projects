import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  let path = window.location.pathname;
  return (
    <>
      <Link to={props.navTo} className={path == props.navTo ? "navLink active" : "navLink"}>
        {props.children}
      </Link>
    </>
  );
}

export default Nav;
