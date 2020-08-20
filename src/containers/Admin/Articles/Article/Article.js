import React, { useState, useEffect, useRef, useContext } from "react";

import * as API from "../../../../api/api";
import classes from "./Article.module.css";
import { AuthContext } from "../../../../context/AuthContext";

export default function Article(props) {
  const ref = useRef();
  const [article, setArticle] = useState({
    title: "",
    content: "",
    keywords: "",
  });
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (props.match.params.id) {
      API.getArticle(props.match.params.id)
        .then((resp) => {
          setArticle(resp);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.match.params.id]);

  const saveArticle = (event) => {
    event.preventDefault();
    if (article._id) {
      API.editArticle(article, token)
        .then((resp) => {
          setArticle(resp);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      API.createArticle(article, token)
        .then((resp) => {
          setArticle(resp);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    const formData = new FormData();
    formData.append("image", ref.files[0]);
    API.saveArticleImage(formData, article._id, token)
       .then((resp) => {})
       .catch((error) => {
         console.log(error);
       });
    props.history.push("/admin/articles");
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

  const contentChangedHandler = (event) => {
    const value = event.target.value;
    setArticle((prevArticle) => ({
      ...prevArticle,
      content: value,
    }));
  };

  return (
    <div className={classes.Article}>
      <form onSubmit={saveArticle}>
        <div className="formGroup">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Keywords</label>
          <input
            type="text"
            name="keywords"
            value={article.keywords}
            onChange={keywordsChangedHandler}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="">Content</label>
          <textarea
            name="content"
            id=""
            cols="30"
            rows="10"
            value={article.content}
            onChange={contentChangedHandler}
          ></textarea>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            ref={ref}
          ></input>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}
