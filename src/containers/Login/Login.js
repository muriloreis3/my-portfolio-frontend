import React, { useState, useContext } from "react";

import Logo from "../../components/Layout/Logo/Logo";
import classes from "./Login.module.css";
import { AuthContext } from "../../context/AuthContext";

function Login(props) {
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendAuth = () => {
    login(password, () => {
      props.history.push("/admin/home");
    });
  };

  return (
    <div className={classes.Login}>
      <div className={classes.Box}>
        <div className={classes.Logo}>
          <Logo width="150px" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <button onClick={sendAuth}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
