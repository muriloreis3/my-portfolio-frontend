import React, { useState, useEffect } from "react";

import ArticleList from "../../../components/ArticleList/ArticleList";
import Spinner from "../../../components/UI/Spinner/spinner";
import Modal from "../../../components/UI/Modal/modal";
import * as API from '../../../api/api';
import classes from './Articles.module.css'

const Articles = (props) => {
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
  }, []);

  const openArticle = (id) => {
    props.history.push("/admin/article/" + id);
  };

  const newArticle = () => {
    props.history.push("/admin/article/");
  }

  let content = <Spinner />

  if (!isLoading) {
    content = (
      <div className="cardWrapper">
        <div className={classes.Button}>
            <button onClick={newArticle}>+</button>
        </div>
      <ArticleList articles={articles} openArticle={openArticle} admin/>
    </div>
    )
  }

  if (error) {
    content = <Modal onClose={()=>{}}>{error}<button>Test</button></Modal>
  }

  return content;
};
export default Articles;
