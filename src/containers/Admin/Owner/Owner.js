import React, { useEffect, useState, useContext } from "react";
import { Editor } from '@tinymce/tinymce-react';

import * as API from "../../../api/api";
import classes from "./Owner.module.css";
import { AuthContext } from "../../../context/AuthContext";

const Owner = (props) => {
  const { token } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(null)
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

  const saveOwnerAvatar = (id, token) => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    API.saveOwnerAvatar(formData, id, token)
      .then((resp) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  const saveOwner = (event) => {
    event.preventDefault();
    API.saveOwner(owner, token)
      .then((resp) => {
        saveOwnerAvatar(owner._id, token)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeBioHandler = (content, editor) => {
    setOwner((prevOwner) => ({
      ...prevOwner,
      bio: content,
    }));
  };

  const changeEmailHandler = (event) => {
    const value = event.target.value;
    setOwner((prevOwner) => ({
      ...prevOwner,
      email: value,
    }));
  };

  const changeNameHandler = (event) => {
    const value = event.target.value;
    setOwner((prevOwner) => ({
      ...prevOwner,
      name: value,
    }));
  };

  const changePasswordHandler = (event) => {
    const value = event.target.value;
    setOwner((prevOwner) => ({
      ...prevOwner,
      password: value,
    }));
  };

  const fileChangeHandler = (event) => {
    setAvatar(event.target.files[0]);
  }

  return (
    <div className={classes.Owner}>
      <form onSubmit={saveOwner}>
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={owner.name}
            onChange={changeNameHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={changePasswordHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="name"
            value={owner.email}
            onChange={changeEmailHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="bio">Bio</label>
            <Editor
              value={owner.bio}
              init={{
                menubar: false
              }}
              onEditorChange={changeBioHandler}
            />
        </div>
        <div className="formGroup">
          <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={fileChangeHandler}
            ></input>
        </div>
        <button className="btn">Save</button>
      </form>
    </div>
  );
};

export default Owner;
