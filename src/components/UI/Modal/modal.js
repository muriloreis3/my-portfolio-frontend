import React, { useState } from "react";

import classes from "./modal.module.css";
import { Fragment } from "react";

const Modal = (props) => {

  const classBackdrop = [classes.Backdrop];
  const classModal = [classes.Modal];
  props.show ? classBackdrop.push(classes.Show) : classBackdrop.push(classes.Hide);
  props.show ? classModal.push(classes.Show) : classModal.push(classes.Hide);
  return (
    <Fragment>
      <div className={classBackdrop.join(" ")} onClick={props.closeModal}></div>
      <div className={classModal.join(" ")}>{props.children}</div>
    </Fragment>
  );
};

export default Modal;
