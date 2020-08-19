import React, { Fragment } from 'react'

import Card from '../UI/Card/card';

const ArticleList = (props) => {
    return (
        <Fragment>
            { props.articles.map(article => {
                return (
                    <Card 
                        key={article._id} clicked={() => props.openArticle(article._id)}>
                        <h1>{article.title}</h1>
                        <p>{article.content}</p>
                    </Card>
                )
            })}
        </Fragment>
    )
}

export default ArticleList;