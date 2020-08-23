import React from "react";
import classes from "./Tags.module.css";

export default function Tags(props) {
  return (
    <div className="fx">
      {props.content.split(/;|,/).map((el) => (
        <div className={classes.Tag}>{el}</div>
      ))}
    </div>
  );
}
