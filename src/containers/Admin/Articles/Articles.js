import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import ArticleList from "../../../components/ArticleList/ArticleList";
import Spinner from "../../../components/UI/Spinner/spinner";
import Modal from "../../../components/UI/Modal/modal";
import * as API from "../../../api/api";
import { AuthContext } from "../../../context/AuthContext";
import classes from "./Articles.module.css";
import ConfirmModal from "../../../components/UI/Modal/ConfirmModal/ConfirmModal";

const Articles = (props) => {
  
  const location = useLocation();
  const { token } = useContext(AuthContext);

  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
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
    setIsDeleting(true);
    setDeleteId(id);
  };

  const deleteArticleApi = () => {
    API.deleteArticle(deleteId, token)
      .then((resp) => {
        setDeleteId(null);
        const updatedArticles = articles.filter(article => article._id !== resp._id);
        setArticles(updatedArticles);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

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
        {isDeleting && (
          <ConfirmModal
            show={isDeleting}
            modalClose={() => {setIsDeleting(false); setDeleteId(null)}}
            confirm={deleteArticleApi}
          >
            <p>Are you sure?</p>
          </ConfirmModal>
        )}
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
export default Articles;
