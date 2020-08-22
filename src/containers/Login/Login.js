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

  const sendAuth = (event) => {
    event.preventDefault();
    login(password, (token) => {
      props.history.push("/admin/home");
      localStorage.setItem("token", token);
    });
  };

  return (
    <div className={classes.Login}>
        <form className={classes.Box} onSubmit={sendAuth}>
          <div className={classes.Logo}>
            <Logo width="150px" />
          </div>
          <div className="formGroup">
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
            />
            <button className="btn">Login</button>
          </div>
        </form>
    </div>
  );
}

export default Login;
