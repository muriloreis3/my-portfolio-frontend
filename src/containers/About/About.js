import React, { useState, useEffect } from "react";
import renderHTML from "react-render-html";

import * as API from "../../api/api";
import Modal from "../../components/UI/Modal/modal";
import Spinner from "../../components/UI/Spinner/spinner";
import classes from "./About.module.css";

export default function About(props) {
  const [owner, setOwner] = useState({
    bio:""
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      });
  }, []);

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className={classes.About}>
        <div className={classes.avatar}>
          <img src={`data:image/jpeg;base64,${owner.avatar}`} alt="" />
        </div>
        <div className={classes.text}>
          <h2>Hello my name is {owner.name}</h2>
          <p>{renderHTML(owner.bio)}</p>
        </div>
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
}
