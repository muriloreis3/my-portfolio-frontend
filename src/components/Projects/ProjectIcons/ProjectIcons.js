import React, { Fragment } from "react";

export default function ProjectIcons(props) {
  return (
    <Fragment>
      <a href={props.demonstrationLink}>
        <i className="fas fa-desktop"></i>
      </a>
      <a href={props.repositoryLink}>
        <i className="fab fa-github"></i>
      </a>
    </Fragment>
  );
}
