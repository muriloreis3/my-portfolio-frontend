import React, { useState } from "react";
import classes from "./HamburgerButton.module.css";

export default function HamburgerButton(props) {
  const [changed, setChanged] = useState(false);
  const classNames = [classes.HamburgerButton];
  changed && classNames.push(classes.change);

  return (
    <div
      className={classNames.join(" ")}
      onClick={() => {
        setChanged(!changed);
        props.clicked();
      }}
    >
      <div className={classes.bar1}></div>
      <div className={classes.bar2}></div>
      <div className={classes.bar3}></div>
    </div>
  );
}
