import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import ArticleList from "../../../components/ArticleList/ArticleList";
import Spinner from "../../../components/UI/Spinner/spinner";
import Modal from "../../../components/UI/Modal/modal";
import * as API from "../../../api/api";
import { AuthContext } from "../../../context/AuthContext";
import classes from "./Articles.module.css";

const Articles = (props) => {
  const location = useLocation();
  const { token } = useContext(AuthContext);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    API.getArticles()
      .then((resp) => {
        setArticles(resp);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [location]);

  const openArticle = (id) => {
    props.history.push("/admin/article/" + id);
  };

  const newArticle = () => {
    props.history.push("/admin/article/");
  };

  const deleteArticle = (id) => {
    API.deleteArticle(id, token)
      .then((resp) => {})
      .catch((error) => {
        setError(error);
      });
  };

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className="cardWrapper">
        <div className={classes.Button}>
          <button onClick={newArticle}>+</button>
        </div>
        <ArticleList
          articles={articles}
          openArticle={openArticle}
          onDeleteArticle={deleteArticle}
          admin
        />
      </div>
    );
  }

  if (error) {
    content = (
      <Modal show={error !== null} onClose={() => {setError(null)}}>
        {error}
      </Modal>
    );
  }

  return content;
};
export default Articles;
