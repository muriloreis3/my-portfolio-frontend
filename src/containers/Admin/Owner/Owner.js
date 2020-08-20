import React, { useEffect, useState, useContext } from "react";

import * as API from "../../../api/api";
import classes from "./Owner.module.css";
import { AuthContext } from "../../../context/AuthContext";

const Owner = (props) => {
  const { token } = useContext(AuthContext);
  const [owner, setOwner] = useState({
    name: "",
    password: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    API.getOwner()
      .then((resp) => {
        setOwner(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setOwner]);

  const saveOwner = (event) => {
    event.preventDefault();
    API.saveOwner(owner, token)
      .then((resp) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeBioHandler = (event) => {
    const value = event.target.value;
    setOwner((prevOwner) => ({
      ...prevOwner,
      bio: value,
    }));
  };

  const onChangeEmailHandler = (event) => {
    const value = event.target.value;
    setOwner((prevOwner) => ({
      ...prevOwner,
      email: value,
    }));
  };

  const onChangeNameHandler = (event) => {
    const value = event.target.value;
    setOwner((prevOwner) => ({
      ...prevOwner,
      name: value,
    }));
  };

  const onChangePasswordHandler = (event) => {
    const value = event.target.value;
    setOwner((prevOwner) => ({
      ...prevOwner,
      password: value,
    }));
  };

  return (
    <div className={classes.Owner}>
      <form onSubmit={saveOwner}>
        <div className={classes.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={owner.name}
            onChange={onChangeNameHandler}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="name"
            value={owner.email}
            onChange={onChangeEmailHandler}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="bio">Bio</label>
          <textarea
            name="bio"
            id=""
            cols="30"
            rows="10"
            value={owner.bio}
            onChange={onChangeBioHandler}
          ></textarea>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default Owner;
