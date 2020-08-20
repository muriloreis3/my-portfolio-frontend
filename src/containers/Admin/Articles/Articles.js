import React, { useState, useEffect } from "react";

import ArticleList from "../../../components/ArticleList/ArticleList";
import * as API from '../../../api/api';
import classes from './Articles.module.css'

const Articles = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    API.getArticles()
      .then((resp) => {
        setArticles(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openArticle = (id) => {
    props.history.push("/admin/article/" + id);
  };

  return (
    <div className="cardWrapper">
        <div className={classes.Button}>
            <button>+</button>
        </div>
      <ArticleList articles={articles} openArticle={openArticle} admin/>
    </div>
  );
};
export default Articles;
