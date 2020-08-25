import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";

import * as API from "../../../api/api";
import Modal from "../../../components/UI/Modal/modal";
import Spinner from "../../../components/UI/Spinner/spinner";
import classes from "./Owner.module.css";
import { AuthContext } from "../../../context/AuthContext";
import HtmlEditor from "../../../components/UI/HtmlEditor/HtmlEditor"

const Owner = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { token } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [owner, setOwner] = useState({
    name: "",
    password: "",
    email: "",
    bio: "",
  });

  useEffect(() => {
    setIsLoading(true);
    API.getOwner()
      .then((resp) => {
        setIsLoading(false);
        setOwner(resp);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
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
  };

  const saveOwner = () => {
    API.saveOwner(owner, token)
      .then((resp) => {
        saveOwnerAvatar(owner._id, token);
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
  };
  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className={classes.Owner}>
        <form onSubmit={handleSubmit(saveOwner)}>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={owner.name}
              onChange={changeNameHandler}
              ref={register({ required: true })}
              className={errors.name && "inputError"}
            />
            {errors.name && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={changePasswordHandler}
              ref={register({ minLength: 6 })}
              className={errors.password && "inputError"}
            />
            {errors.password && (
              <span className="error">Password too short</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={owner.email}
              onChange={changeEmailHandler}
              ref={register({ required: true })}
              className={errors.email && "inputError"}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="bio">Bio</label>
            <HtmlEditor
              name="bio"
              value={owner.bio}
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
          <input type="submit" className="btn" value="Save" />
        </form>
      </div>
    );
  }

  if (error) {
    content = (
      <Modal
        show={error !== null}
        modalClose={() => {
          setError(null);
        }}
      >
        {error}
      </Modal>
    );
  }
  return content;
};

export default Owner;
