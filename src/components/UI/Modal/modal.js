import React, { useState } from "react";

import classes from "./modal.module.css";

const Modal = (props) => {
  const [show, setShow] = useState(true);

  const close = () => {
    props.onClose();
    setShow(false);
  };

  const classNames = [classes.Backdrop];
  show ? classNames.push(classes.Show) : classNames.push(classes.Hide);

  return (
    <div className={classNames.join(" ")} onClick={close}>
      <div className={classes.Modal}>{props.children}</div>
    </div>
  );
};

export default Modal;
