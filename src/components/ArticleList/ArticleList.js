import React, { Fragment } from "react";
import renderHTML from 'react-render-html';

import Card from "../UI/Card/card";

const ArticleList = (props) => {
  return (
    <Fragment>
      {props.articles.map((article) => {
        return (
          <Card
            key={article._id}
            clicked={() => props.openArticle(article._id)}
            image={article.image ? article.image.toString() : null}
          >
            <div className="ProjectTitle">
              <h1>{article.title}</h1>
              {props.admin ? (
                <div className="delete">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      props.onDeleteArticle(article._id);
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              ) : null}
            </div>
            {renderHTML(article.content)}
          </Card>
        );
      })}
    </Fragment>
  );
};

export default ArticleList;
