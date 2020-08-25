import React, { useState } from "react";

import Menu from "../../UI/Menu/Menu";
import HamburgerButton from "../../UI/HamburgerButton/HamburgerButton";
import classes from "./Header.module.css";

export default function Header(props) {
  const [showMenu, setShowMenu] = useState(false);
  const elClasses = [classes.Header, "bg-heading"];

  return (
    <header className={elClasses.join(" ")}>
      <Menu />
      <HamburgerButton clicked={() => setShowMenu(!showMenu)} />
      {showMenu && <Menu side />}
    </header>
  );
}
