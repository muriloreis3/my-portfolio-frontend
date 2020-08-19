import React, { Fragment } from "react";

export default function ProjectIcons(props) {
  return (
    <Fragment>
      <a href={props.repositoryLink}>
        <i class="fab fa-github"></i>
      </a>
      <a href={props.demonstrationLink}>
        <i class="fas fa-desktop"></i>
      </a>
    </Fragment>
  );
}
