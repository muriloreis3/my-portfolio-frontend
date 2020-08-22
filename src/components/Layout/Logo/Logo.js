import React from "react";

import classes from "./Logo.module.css";
import myLogo from "../../../assets/images/logo.png";

export default function Logo(props) {
  return (
    <div
      className={classes.Logo}
      style={{ width: props.width, height: props.height }}
    >
      <img src={myLogo} alt="myLogo"/>
    </div>
  );
}
