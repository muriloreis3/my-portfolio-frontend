import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NotFound.module.css";
import Logo from "../Layout/Logo/Logo";

const NotFound = () => {
  return (
    <div className={classes.NotFound}>
      <div className={classes.Logo}>
        <NavLink to="/" exact>
          <Logo width="100px" height="100px" />
        </NavLink>
      </div>
      <h1>Page not found! <NavLink to="/" exact>Try Again</NavLink></h1>
    </div>
  );
};

export default NotFound;
