import React, { useEffect, useState } from "react";
import renderHTML from "react-render-html";

import Modal from "../../../components/UI/Modal/modal";
import Spinner from "../../../components/UI/Spinner/spinner";
import * as API from "../../../api/api";

export default function Article(props) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({
    content: "",
  });
  useEffect(() => {
    setIsLoading(true);
    API.getArticle(props.match.params.id)
      .then((resp) => {
        setArticle(resp);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, [props.match.params.id]);

  const data = new Date(article.createdAt);
  const mes = (data.getMonth() + 1).toString();

  let content = <Spinner />;

  if (!isLoading) {
    content = (
      <div className="fx fx-col h_100">
        <div className="Image">
          <img src={`data:image/jpeg;base64,${article.image}`} alt="" />
        </div>
        <div className="Content">
          <h2>{article.title}</h2>
          <div>{renderHTML(article.content)}</div>
          <div class="displayFooter">
            <em>
              Published:{" "}
              {`${data.getDate()}/${
                mes.length === 1 ? "0" + mes : mes
              }/${data.getFullYear()}`}
            </em>
          </div>
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
