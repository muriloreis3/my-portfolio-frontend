import React, { useState, useEffect } from "react";
import * as API from "../../api/api";

import Modal from "../../components/UI/Modal/modal";
import Spinner from "../../components/UI/Spinner/spinner";
import ArticleList from "../../components/ArticleList/ArticleList";

export default function Articles(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    API.getArticles()
      .then((resp) => {
        setArticles(resp);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  const openArticle = (id) => {
    props.history.push("/article/" + id);
  };

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className="cardWrapper">
        <ArticleList articles={articles} openArticle={openArticle} />
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
