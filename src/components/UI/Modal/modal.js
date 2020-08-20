import React, { useState } from "react";

import classes from "./modal.module.css";
import { Fragment } from "react";

const Modal = (props) => {
  const [show, setShow] = useState(true);

  const close = () => {
    props.onClose();
    setShow(false);
  };

  const classBackdrop = [classes.Backdrop];
  const classModal = [classes.Modal];
  show ? classBackdrop.push(classes.Show) : classBackdrop.push(classes.Hide);
  show ? classModal.push(classes.Show) : classModal.push(classes.Hide);
  return (
    <Fragment>
      <div className={classBackdrop.join(" ")} onClick={close}></div>
      <div className={classModal.join(" ")}>{props.children}</div>
    </Fragment>
  );
};

export default Modal;
