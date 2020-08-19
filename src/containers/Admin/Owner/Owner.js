import React, { useEffect, useState, useContext } from "react";

import * as API from "../../../api/api";
import classes from "./Owner.module.css";
import { AuthContext } from "../../../context/AuthContext";
import Form from "../../../components/UI/Form/form";

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

  const saveOwner = (owner) => {    
    API.saveOwner(owner, token)
      .then((resp) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.Owner}>
      <Form submited={saveOwner} submitText="Save">
        <div className={classes.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={owner.name}
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
          />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={owner.email}
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
          ></textarea>
        </div>
      </Form>
    </div>
  );
};

export default Owner;
