import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";

import Modal from "../../../../components/UI/Modal/modal";
import Spinner from "../../../../components/UI/Spinner/spinner";
import * as API from "../../../../api/api";
import classes from "./Article.module.css";
import { AuthContext } from "../../../../context/AuthContext";
import HtmlEditor from "../../../../components/UI/HtmlEditor/HtmlEditor";

export default function Article(props) {
  const { register, handleSubmit, errors } = useForm();

  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [articleImage, setArticleImage] = useState(null);
  const [article, setArticle] = useState({
    title: "",
    content: "",
    keywords: "",
  });
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (props.match.params.id) {
      setIsLoading(true);
      API.getArticle(props.match.params.id)
        .then((resp) => {
          setArticle(resp);
          setError(null);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [props.match.params.id]);

  const saveArticleImage = (id, token) => {
    if (articleImage) {
      const formData = new FormData();
      formData.append("image", articleImage);
      API.saveArticleImage(formData, id, token)
        .then((resp) => {
          props.history.push("/admin/articles");
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      props.history.push("/admin/articles");
    }
  };

  const saveArticle = () => {
    if (article._id) {
      API.editArticle(article, token)
        .then((resp) => {
          saveArticleImage(resp._id, token);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      API.createArticle(article, token)
        .then((resp) => {
          saveArticleImage(resp._id, token);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const titleChangedHandler = (event) => {
    const value = event.target.value;
    setArticle((prevArticle) => ({
      ...prevArticle,
      title: value,
    }));
  };

  const keywordsChangedHandler = (event) => {
    const value = event.target.value;
    setArticle((prevArticle) => ({
      ...prevArticle,
      keywords: value,
    }));
  };

  const contentChangedHandler = (content, editor) => {
    setArticle((prevArticle) => ({
      ...prevArticle,
      content: content,
    }));
  };

  const fileChangeHandler = (event) => {
    setArticleImage(event.target.files[0]);
  };

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className={classes.Article}>
        <form onSubmit={handleSubmit(saveArticle)}>
          <div className="formGroup">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              value={article.title}
              onChange={titleChangedHandler}
              ref={register({ required: true })}
              className={errors.title && "inputError"}
            />
            {errors.title && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="">Keywords</label>
            <input
              type="text"
              name="keywords"
              value={article.keywords}
              onChange={keywordsChangedHandler}
              ref={register({ required: true })}
              className={errors.keywords && "inputError"}
            />
            {errors.keywords && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="formGroup">
            <label htmlFor="">Content</label>
            <HtmlEditor
              name="content"
              value={article.content}
              onEditorChange={contentChangedHandler}
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
          <input type="submit" className="btn" value="Save"/>
        </form>
      </div>
    );
  }

  if (error) {
    content = (
      <Modal show={error !== null} closeModal={() => setError(null)}>
        {error}
      </Modal>
    );
  }

  return content;
}
