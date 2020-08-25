import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../Layout/Logo/Logo";
import classes from "./Menu.module.css";

export default function Menu(props) {
  const classNames = [];

  props.side ? classNames.push(classes.sideMenu) : classNames.push(classes.Menu)

  return (
    <div className={classNames.join(" ")}>
      <div className={classes.Logo}>
        <NavLink to="/" exact>
          <Logo width="50px" height="50px" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/articles" activeClassName={classes.active}>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName={classes.active}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
